import { PrismaClient, Role, Status, Priority } from '../src/generated/prisma';
import { PrismaLibSql } from '@prisma/adapter-libsql';
import path from 'path';

const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
const adapter = new PrismaLibSql({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting seed...');

  // Clean up existing data
  console.log('🧹 Cleaning existing data...');
  await prisma.auditLog.deleteMany();
  await prisma.setting.deleteMany();
  await prisma.task.deleteMany();
  await prisma.project.deleteMany();
  await prisma.message.deleteMany();
  await prisma.review.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.productCategory.deleteMany();
  await prisma.brand.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.category.deleteMany();
  await prisma.userFollow.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.group.deleteMany();
  await prisma.user.deleteMany();

  // ============================================
  // USERS
  // ============================================
  console.log('👤 Creating users...');
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'admin@example.com',
        username: 'admin',
        firstName: 'Admin',
        lastName: 'User',
        password: 'hashed_password_123',
        role: Role.ADMIN,
        isActive: true,
        balance: 1000.50,
        metadata: JSON.stringify({ theme: 'dark', notifications: true }),
        profile: {
          create: {
            bio: 'System administrator with full access',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=admin',
            website: 'https://admin.example.com',
            location: 'New York, USA',
            phone: '+1-555-0100',
            birthDate: new Date('1985-03-15'),
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'john.doe@example.com',
        username: 'johndoe',
        firstName: 'John',
        lastName: 'Doe',
        password: 'hashed_password_456',
        role: Role.USER,
        isActive: true,
        balance: 250.75,
        profile: {
          create: {
            bio: 'Software developer and tech enthusiast',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
            website: 'https://johndoe.dev',
            location: 'San Francisco, CA',
            phone: '+1-555-0101',
            birthDate: new Date('1990-07-22'),
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'jane.smith@example.com',
        username: 'janesmith',
        firstName: 'Jane',
        lastName: 'Smith',
        password: 'hashed_password_789',
        role: Role.MODERATOR,
        isActive: true,
        balance: 500.00,
        profile: {
          create: {
            bio: 'Content moderator and community manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
            location: 'London, UK',
            phone: '+44-20-7946-0958',
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'bob.wilson@example.com',
        username: 'bobwilson',
        firstName: 'Bob',
        lastName: 'Wilson',
        password: 'hashed_password_101',
        role: Role.USER,
        isActive: true,
        balance: 75.25,
        profile: {
          create: {
            bio: 'Casual blogger and book reviewer',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=bob',
            location: 'Toronto, Canada',
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'alice.johnson@example.com',
        username: 'alicejohnson',
        firstName: 'Alice',
        lastName: 'Johnson',
        password: 'hashed_password_202',
        role: Role.USER,
        isActive: false, // Inactive user
        balance: 0,
        profile: {
          create: {
            bio: 'Currently on hiatus',
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        email: 'guest@example.com',
        username: 'guest',
        firstName: 'Guest',
        lastName: 'User',
        password: 'hashed_password_guest',
        role: Role.GUEST,
        isActive: true,
        balance: 0,
      },
    }),
  ]);

  const [admin, john, jane, bob, alice, guest] = users;

  // ============================================
  // USER FOLLOWS (self-referential N:M)
  // ============================================
  console.log('🔗 Creating user follows...');
  await Promise.all([
    prisma.userFollow.create({ data: { followerId: john.id, followingId: admin.id } }),
    prisma.userFollow.create({ data: { followerId: john.id, followingId: jane.id } }),
    prisma.userFollow.create({ data: { followerId: jane.id, followingId: john.id } }),
    prisma.userFollow.create({ data: { followerId: bob.id, followingId: john.id } }),
    prisma.userFollow.create({ data: { followerId: bob.id, followingId: jane.id } }),
    prisma.userFollow.create({ data: { followerId: alice.id, followingId: admin.id } }),
  ]);

  // ============================================
  // GROUPS (N:M with users)
  // ============================================
  console.log('👥 Creating groups...');
  const groups = await Promise.all([
    prisma.group.create({
      data: {
        name: 'Developers',
        description: 'Software development discussions',
        isPrivate: false,
        members: { connect: [{ id: john.id }, { id: jane.id }, { id: bob.id }] },
      },
    }),
    prisma.group.create({
      data: {
        name: 'Admins',
        description: 'Administrative team',
        isPrivate: true,
        members: { connect: [{ id: admin.id }, { id: jane.id }] },
      },
    }),
    prisma.group.create({
      data: {
        name: 'Book Club',
        description: 'Monthly book discussions',
        isPrivate: false,
        members: { connect: [{ id: bob.id }, { id: alice.id }] },
      },
    }),
  ]);

  // ============================================
  // CATEGORIES (self-referential tree)
  // ============================================
  console.log('📂 Creating categories...');
  const techCategory = await prisma.category.create({
    data: {
      name: 'Technology',
      slug: 'technology',
      description: 'Tech news and tutorials',
      color: '#3B82F6',
      order: 1,
    },
  });

  const [webDev, mobile, ai] = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Web Development',
        slug: 'web-development',
        description: 'Frontend and backend web development',
        color: '#10B981',
        order: 1,
        parentId: techCategory.id,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Mobile Development',
        slug: 'mobile-development',
        description: 'iOS and Android development',
        color: '#F59E0B',
        order: 2,
        parentId: techCategory.id,
      },
    }),
    prisma.category.create({
      data: {
        name: 'AI & Machine Learning',
        slug: 'ai-machine-learning',
        description: 'Artificial Intelligence topics',
        color: '#8B5CF6',
        order: 3,
        parentId: techCategory.id,
      },
    }),
  ]);

  const [lifestyle, travel] = await Promise.all([
    prisma.category.create({
      data: {
        name: 'Lifestyle',
        slug: 'lifestyle',
        description: 'Life hacks and personal development',
        color: '#EC4899',
        order: 2,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Travel',
        slug: 'travel',
        description: 'Travel guides and tips',
        color: '#14B8A6',
        order: 3,
      },
    }),
  ]);

  // ============================================
  // TAGS (N:M with posts)
  // ============================================
  console.log('🏷️ Creating tags...');
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: 'JavaScript', slug: 'javascript' } }),
    prisma.tag.create({ data: { name: 'TypeScript', slug: 'typescript' } }),
    prisma.tag.create({ data: { name: 'React', slug: 'react' } }),
    prisma.tag.create({ data: { name: 'Next.js', slug: 'nextjs' } }),
    prisma.tag.create({ data: { name: 'Prisma', slug: 'prisma' } }),
    prisma.tag.create({ data: { name: 'GraphQL', slug: 'graphql' } }),
    prisma.tag.create({ data: { name: 'Tutorial', slug: 'tutorial' } }),
    prisma.tag.create({ data: { name: 'Best Practices', slug: 'best-practices' } }),
    prisma.tag.create({ data: { name: 'Beginner', slug: 'beginner' } }),
    prisma.tag.create({ data: { name: 'Advanced', slug: 'advanced' } }),
  ]);

  const [jsTag, tsTag, reactTag, nextTag, prismaTag, gqlTag, tutorialTag, bestPracticesTag, beginnerTag, advancedTag] = tags;

  // ============================================
  // POSTS
  // ============================================
  console.log('📝 Creating posts...');
  const posts = await Promise.all([
    prisma.post.create({
      data: {
        title: 'Getting Started with Next.js 16',
        slug: 'getting-started-nextjs-16',
        content: 'Next.js 16 brings exciting new features including improved performance, better developer experience, and enhanced server components. In this guide, we will explore the key features and how to get started.',
        excerpt: 'Learn the basics of Next.js 16 and its new features.',
        status: Status.PUBLISHED,
        featured: true,
        viewCount: 1520,
        readTime: 8.5,
        publishedAt: new Date('2024-01-15'),
        authorId: john.id,
        categoryId: webDev.id,
        tags: { connect: [{ id: jsTag.id }, { id: nextTag.id }, { id: tutorialTag.id }, { id: beginnerTag.id }] },
        likedBy: { connect: [{ id: jane.id }, { id: bob.id }, { id: alice.id }] },
      },
    }),
    prisma.post.create({
      data: {
        title: 'Advanced Prisma Patterns for Production',
        slug: 'advanced-prisma-patterns',
        content: 'Deep dive into advanced Prisma patterns including transactions, middleware, and performance optimization techniques for production applications.',
        excerpt: 'Master advanced Prisma patterns for scalable applications.',
        status: Status.PUBLISHED,
        featured: true,
        viewCount: 2340,
        readTime: 15.0,
        publishedAt: new Date('2024-01-20'),
        authorId: jane.id,
        categoryId: webDev.id,
        tags: { connect: [{ id: prismaTag.id }, { id: tsTag.id }, { id: advancedTag.id }, { id: bestPracticesTag.id }] },
        likedBy: { connect: [{ id: john.id }, { id: admin.id }] },
      },
    }),
    prisma.post.create({
      data: {
        title: 'Building GraphQL APIs with Nexus',
        slug: 'building-graphql-apis-nexus',
        content: 'Learn how to build type-safe GraphQL APIs using Nexus and Prisma. We cover schema design, resolvers, and best practices.',
        excerpt: 'Create type-safe GraphQL APIs with Nexus.',
        status: Status.PUBLISHED,
        featured: false,
        viewCount: 890,
        readTime: 12.0,
        publishedAt: new Date('2024-01-25'),
        authorId: john.id,
        categoryId: webDev.id,
        tags: { connect: [{ id: gqlTag.id }, { id: prismaTag.id }, { id: tsTag.id }, { id: tutorialTag.id }] },
      },
    }),
    prisma.post.create({
      data: {
        title: 'React Server Components Explained',
        slug: 'react-server-components-explained',
        content: 'A comprehensive guide to understanding React Server Components, their benefits, and how to use them effectively in your applications.',
        excerpt: 'Understanding React Server Components.',
        status: Status.DRAFT,
        featured: false,
        viewCount: 0,
        readTime: 10.0,
        authorId: bob.id,
        categoryId: webDev.id,
        tags: { connect: [{ id: reactTag.id }, { id: jsTag.id }] },
      },
    }),
    prisma.post.create({
      data: {
        title: 'My Travel Adventures in Japan',
        slug: 'travel-adventures-japan',
        content: 'Sharing my experiences traveling through Japan - from Tokyo to Kyoto, including tips on food, culture, and must-see attractions.',
        excerpt: 'A personal journey through Japan.',
        status: Status.PUBLISHED,
        featured: false,
        viewCount: 456,
        readTime: 7.0,
        publishedAt: new Date('2024-02-01'),
        authorId: alice.id,
        categoryId: travel.id,
      },
    }),
    prisma.post.create({
      data: {
        title: 'Introduction to Machine Learning',
        slug: 'introduction-machine-learning',
        content: 'A beginner-friendly introduction to machine learning concepts, algorithms, and practical applications.',
        excerpt: 'Start your ML journey here.',
        status: Status.PENDING,
        featured: false,
        viewCount: 0,
        authorId: jane.id,
        categoryId: ai.id,
        tags: { connect: [{ id: beginnerTag.id }, { id: tutorialTag.id }] },
      },
    }),
  ]);

  const [nextjsPost, prismaPost, gqlPost, reactPost, travelPost, mlPost] = posts;

  // ============================================
  // COMMENTS (with replies - self-referential)
  // ============================================
  console.log('💬 Creating comments...');
  const comment1 = await prisma.comment.create({
    data: {
      content: 'Great tutorial! Really helped me understand Next.js better.',
      approved: true,
      authorId: jane.id,
      postId: nextjsPost.id,
    },
  });

  await Promise.all([
    prisma.comment.create({
      data: {
        content: 'Thanks! Glad you found it helpful.',
        approved: true,
        authorId: john.id,
        postId: nextjsPost.id,
        parentId: comment1.id, // Reply to comment1
      },
    }),
    prisma.comment.create({
      data: {
        content: 'I learned so much from this. The advanced patterns are really useful.',
        approved: true,
        authorId: bob.id,
        postId: prismaPost.id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Could you cover more about database migrations?',
        approved: false, // Unapproved comment
        authorId: guest.id,
        postId: prismaPost.id,
      },
    }),
    prisma.comment.create({
      data: {
        content: 'Amazing photos! Japan looks beautiful.',
        approved: true,
        authorId: john.id,
        postId: travelPost.id,
      },
    }),
  ]);

  // ============================================
  // BRANDS
  // ============================================
  console.log('🏢 Creating brands...');
  const brands = await Promise.all([
    prisma.brand.create({
      data: {
        name: 'TechCorp',
        slug: 'techcorp',
        logo: 'https://via.placeholder.com/100?text=TC',
        description: 'Leading technology products manufacturer',
        website: 'https://techcorp.example.com',
      },
    }),
    prisma.brand.create({
      data: {
        name: 'StyleHouse',
        slug: 'stylehouse',
        logo: 'https://via.placeholder.com/100?text=SH',
        description: 'Fashion and lifestyle brand',
        website: 'https://stylehouse.example.com',
      },
    }),
    prisma.brand.create({
      data: {
        name: 'HomeEssentials',
        slug: 'homeessentials',
        logo: 'https://via.placeholder.com/100?text=HE',
        description: 'Quality home products',
        website: 'https://homeessentials.example.com',
        isActive: false, // Inactive brand
      },
    }),
  ]);

  const [techCorp, styleHouse, homeEssentials] = brands;

  // ============================================
  // PRODUCT CATEGORIES
  // ============================================
  console.log('📦 Creating product categories...');
  const electronics = await prisma.productCategory.create({
    data: { name: 'Electronics', slug: 'electronics', order: 1 },
  });

  await Promise.all([
    prisma.productCategory.create({
      data: { name: 'Computers', slug: 'computers', order: 1, parentId: electronics.id },
    }),
    prisma.productCategory.create({
      data: { name: 'Phones', slug: 'phones', order: 2, parentId: electronics.id },
    }),
    prisma.productCategory.create({
      data: { name: 'Clothing', slug: 'clothing', order: 2 },
    }),
    prisma.productCategory.create({
      data: { name: 'Home & Garden', slug: 'home-garden', order: 3 },
    }),
  ]);

  // ============================================
  // PRODUCTS
  // ============================================
  console.log('📦 Creating products...');
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Pro Laptop 16"',
        sku: 'TECH-LAPTOP-001',
        description: 'High-performance laptop with M3 chip, 16GB RAM, 512GB SSD',
        price: 2499.99,
        comparePrice: 2799.99,
        costPrice: 1800.00,
        quantity: 50,
        weight: 2.1,
        isFeatured: true,
        brandId: techCorp.id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Wireless Mouse',
        sku: 'TECH-MOUSE-001',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 79.99,
        comparePrice: 99.99,
        costPrice: 35.00,
        quantity: 200,
        weight: 0.12,
        brandId: techCorp.id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'USB-C Hub',
        sku: 'TECH-HUB-001',
        description: '7-in-1 USB-C hub with HDMI, USB-A, SD card reader',
        price: 59.99,
        costPrice: 25.00,
        quantity: 150,
        weight: 0.15,
        brandId: techCorp.id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Classic T-Shirt',
        sku: 'STYLE-TSHIRT-001',
        description: '100% organic cotton t-shirt, available in multiple colors',
        price: 29.99,
        comparePrice: 39.99,
        costPrice: 12.00,
        quantity: 500,
        weight: 0.25,
        brandId: styleHouse.id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Out of Stock Item',
        sku: 'SOLD-OUT-001',
        description: 'This item is currently out of stock',
        price: 199.99,
        quantity: 0,
        isActive: true,
        brandId: techCorp.id,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Discontinued Product',
        sku: 'DISC-001',
        description: 'This product has been discontinued',
        price: 149.99,
        quantity: 10,
        isActive: false,
        brandId: homeEssentials.id,
      },
    }),
  ]);

  const [laptop, mouse, hub, tshirt, outOfStock, discontinued] = products;

  // ============================================
  // ORDERS & ORDER ITEMS
  // ============================================
  console.log('🛒 Creating orders...');
  const order1 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-2024-0001',
      status: Status.PUBLISHED, // Completed
      subtotal: 2579.98,
      tax: 232.20,
      shipping: 0,
      total: 2812.18,
      notes: 'Priority shipping requested',
      shippingAddress: '123 Main St, New York, NY 10001',
      billingAddress: '123 Main St, New York, NY 10001',
      customerId: john.id,
      items: {
        create: [
          { productId: laptop.id, quantity: 1, price: 2499.99, total: 2499.99 },
          { productId: mouse.id, quantity: 1, price: 79.99, total: 79.99 },
        ],
      },
    },
  });

  const order2 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-2024-0002',
      status: Status.PENDING,
      subtotal: 119.97,
      tax: 10.80,
      shipping: 9.99,
      total: 140.76,
      shippingAddress: '456 Oak Ave, San Francisco, CA 94102',
      customerId: bob.id,
      items: {
        create: [
          { productId: hub.id, quantity: 1, price: 59.99, total: 59.99 },
          { productId: tshirt.id, quantity: 2, price: 29.99, total: 59.98 },
        ],
      },
    },
  });

  const order3 = await prisma.order.create({
    data: {
      orderNumber: 'ORD-2024-0003',
      status: Status.DRAFT, // Cart
      subtotal: 79.99,
      tax: 0,
      shipping: 0,
      total: 79.99,
      customerId: alice.id,
      items: {
        create: [
          { productId: mouse.id, quantity: 1, price: 79.99, total: 79.99 },
        ],
      },
    },
  });

  // ============================================
  // REVIEWS
  // ============================================
  console.log('⭐ Creating reviews...');
  await Promise.all([
    prisma.review.create({
      data: {
        rating: 5,
        title: 'Best laptop I have ever owned!',
        content: 'The performance is incredible. Battery life is amazing. Highly recommend!',
        approved: true,
        authorId: john.id,
        productId: laptop.id,
      },
    }),
    prisma.review.create({
      data: {
        rating: 4,
        title: 'Great mouse, minor issues',
        content: 'Very comfortable to use, but the scroll wheel could be smoother.',
        approved: true,
        authorId: bob.id,
        productId: mouse.id,
      },
    }),
    prisma.review.create({
      data: {
        rating: 5,
        title: 'Perfect for my setup',
        content: 'Works flawlessly with my MacBook. All ports work great!',
        approved: true,
        authorId: jane.id,
        productId: hub.id,
      },
    }),
    prisma.review.create({
      data: {
        rating: 3,
        title: 'Average quality',
        content: 'The fabric is okay but not as soft as expected.',
        approved: false, // Pending review
        authorId: alice.id,
        productId: tshirt.id,
      },
    }),
  ]);

  // ============================================
  // MESSAGES
  // ============================================
  console.log('✉️ Creating messages...');
  await Promise.all([
    prisma.message.create({
      data: {
        subject: 'Welcome to the platform!',
        content: 'Hi John, welcome to our platform. Feel free to reach out if you need any help.',
        read: true,
        priority: Priority.LOW,
        senderId: admin.id,
        receiverId: john.id,
      },
    }),
    prisma.message.create({
      data: {
        subject: 'Question about your post',
        content: 'Hey, I loved your Next.js tutorial. Could you write more about server actions?',
        read: false,
        priority: Priority.MEDIUM,
        senderId: bob.id,
        receiverId: john.id,
      },
    }),
    prisma.message.create({
      data: {
        subject: 'URGENT: System maintenance',
        content: 'Scheduled maintenance this weekend. Please save your work.',
        read: false,
        priority: Priority.URGENT,
        senderId: admin.id,
        receiverId: jane.id,
      },
    }),
    prisma.message.create({
      data: {
        subject: 'Collaboration request',
        content: 'Would you like to collaborate on a new project?',
        read: true,
        priority: Priority.HIGH,
        senderId: jane.id,
        receiverId: john.id,
      },
    }),
  ]);

  // ============================================
  // PROJECTS & TASKS
  // ============================================
  console.log('📊 Creating projects and tasks...');
  const project1 = await prisma.project.create({
    data: {
      name: 'Website Redesign',
      description: 'Complete redesign of the company website',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-06-30'),
      budget: 50000,
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: 'Mobile App Development',
      description: 'Develop a mobile app for iOS and Android',
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-12-31'),
      budget: 150000,
    },
  });

  // Create parent task
  const parentTask = await prisma.task.create({
    data: {
      title: 'Design Phase',
      description: 'Complete all design tasks for the website redesign',
      status: Status.PUBLISHED, // Completed
      priority: Priority.HIGH,
      dueDate: new Date('2024-02-28'),
      completedAt: new Date('2024-02-25'),
      estimatedHours: 40,
      actualHours: 38,
      projectId: project1.id,
    },
  });

  // Create subtasks
  await Promise.all([
    prisma.task.create({
      data: {
        title: 'Create wireframes',
        status: Status.PUBLISHED,
        priority: Priority.HIGH,
        completedAt: new Date('2024-02-10'),
        estimatedHours: 16,
        actualHours: 14,
        projectId: project1.id,
        parentId: parentTask.id,
      },
    }),
    prisma.task.create({
      data: {
        title: 'Design mockups',
        status: Status.PUBLISHED,
        priority: Priority.HIGH,
        completedAt: new Date('2024-02-20'),
        estimatedHours: 24,
        actualHours: 24,
        projectId: project1.id,
        parentId: parentTask.id,
      },
    }),
    prisma.task.create({
      data: {
        title: 'Development Phase',
        description: 'Implement the new design',
        status: Status.PENDING, // In progress
        priority: Priority.HIGH,
        dueDate: new Date('2024-05-31'),
        estimatedHours: 200,
        projectId: project1.id,
      },
    }),
    prisma.task.create({
      data: {
        title: 'App Architecture Design',
        status: Status.DRAFT, // Not started
        priority: Priority.URGENT,
        dueDate: new Date('2024-03-31'),
        estimatedHours: 32,
        projectId: project2.id,
      },
    }),
  ]);

  // ============================================
  // SETTINGS
  // ============================================
  console.log('⚙️ Creating settings...');
  await Promise.all([
    prisma.setting.create({
      data: { key: 'site_name', value: 'Admin Test App', type: 'string', group: 'general' },
    }),
    prisma.setting.create({
      data: { key: 'site_description', value: 'A comprehensive admin test application', type: 'string', group: 'general' },
    }),
    prisma.setting.create({
      data: { key: 'items_per_page', value: '25', type: 'number', group: 'display' },
    }),
    prisma.setting.create({
      data: { key: 'enable_comments', value: 'true', type: 'boolean', group: 'features' },
    }),
    prisma.setting.create({
      data: { key: 'enable_reviews', value: 'true', type: 'boolean', group: 'features' },
    }),
    prisma.setting.create({
      data: { key: 'tax_rate', value: '0.09', type: 'number', group: 'commerce' },
    }),
    prisma.setting.create({
      data: { key: 'currency', value: 'USD', type: 'string', group: 'commerce' },
    }),
    prisma.setting.create({
      data: {
        key: 'email_config',
        value: JSON.stringify({ smtp: 'smtp.example.com', port: 587 }),
        type: 'json',
        group: 'email',
      },
    }),
  ]);

  // ============================================
  // AUDIT LOGS
  // ============================================
  console.log('📜 Creating audit logs...');
  await Promise.all([
    prisma.auditLog.create({
      data: {
        action: 'CREATE',
        entity: 'User',
        entityId: john.id.toString(),
        newValue: JSON.stringify({ email: 'john.doe@example.com', username: 'johndoe' }),
        ipAddress: '192.168.1.100',
        userAgent: 'Mozilla/5.0',
      },
    }),
    prisma.auditLog.create({
      data: {
        action: 'UPDATE',
        entity: 'Post',
        entityId: nextjsPost.id.toString(),
        oldValue: JSON.stringify({ status: 'DRAFT' }),
        newValue: JSON.stringify({ status: 'PUBLISHED' }),
        ipAddress: '192.168.1.100',
      },
    }),
    prisma.auditLog.create({
      data: {
        action: 'DELETE',
        entity: 'Comment',
        entityId: '999',
        oldValue: JSON.stringify({ content: 'Spam comment' }),
        ipAddress: '192.168.1.101',
      },
    }),
  ]);

  console.log('✅ Seed completed successfully!');
  console.log(`
📊 Summary:
  - Users: ${users.length}
  - Groups: ${groups.length}
  - Categories: 6
  - Tags: ${tags.length}
  - Posts: ${posts.length}
  - Brands: ${brands.length}
  - Products: ${products.length}
  - Orders: 3
  - Projects: 2
  - Settings: 8
  - Audit Logs: 3
  `);
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
