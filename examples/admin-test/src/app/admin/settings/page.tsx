'use client';

import { Settings } from '@paljs/admin';

export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Table Settings</h1>
      <Settings />
    </div>
  );
}
