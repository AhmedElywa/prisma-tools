module.exports = [
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Void = exports.IBAN = exports.JSONObject = exports.JSON = exports.Currency = exports.USCurrency = exports.Longitude = exports.Latitude = exports.JWT = exports.ISBN = exports.RGBA = exports.RGB = exports.Port = exports.MAC = exports.IPv6 = exports.IPv4 = exports.IP = exports.HSLA = exports.HSL = exports.Hexadecimal = exports.HexColorCode = exports.UUID = exports.PostalCode = exports.PositiveInt = exports.PositiveFloat = exports.ObjectID = exports.PhoneNumber = exports.NonPositiveInt = exports.NonPositiveFloat = exports.NonNegativeInt = exports.NonNegativeFloat = exports.NonEmptyString = exports.NegativeInt = exports.NegativeFloat = exports.EmailAddress = exports.LocalEndTime = exports.LocalDateTime = exports.LocalTime = exports.LocalDate = exports.Duration = exports.UtcOffset = exports.TimeZone = exports.Timestamp = exports.DateTimeISO = exports.DateTime = exports.Time = exports.CountryName = exports.GeoJSON = exports.Cuid2 = exports.ULID = void 0;
exports.ISO8601Duration = exports.Byte = exports.BigInt = exports.Long = exports.GUID = exports.UnsignedFloat = exports.UnsignedInt = exports.URL = exports.Date = exports.IPCPatent = exports.LCCSubclass = exports.DeweyDecimal = exports.SESSN = exports.SemVer = exports.Cuid = exports.AccountNumber = exports.RoutingNumber = exports.Locale = exports.CountryCode = exports.DID = exports.SafeInt = void 0;
const ULID = ()=>'01J9GHQM8N5X4TQ3M1ZV9J6CBK';
exports.ULID = ULID;
const Cuid2 = ()=>'dp71y53f6eykvl5g1393rmhl';
exports.Cuid2 = Cuid2;
const GeoJSON = ()=>'Example GeoJSON';
exports.GeoJSON = GeoJSON;
const CountryName = ()=>'Example CountryName';
exports.CountryName = CountryName;
const BigIntMock = ()=>BigInt(Number.MAX_SAFE_INTEGER);
exports.Long = BigIntMock;
exports.BigInt = BigIntMock;
const ByteMock = ()=>new Uint8Array([
        1988,
        1981,
        1965,
        1963,
        1959,
        1955
    ]);
exports.Byte = ByteMock;
const DateMock = ()=>'2007-12-03';
exports.Date = DateMock;
const Time = ()=>'10:15:30Z';
exports.Time = Time;
const DateTime = ()=>'2007-12-03T10:15:30Z';
exports.DateTime = DateTime;
const DateTimeISO = ()=>'2007-12-03T10:15:30Z';
exports.DateTimeISO = DateTimeISO;
const Timestamp = ()=>1592577642;
exports.Timestamp = Timestamp;
const TimeZone = ()=>'Etc/UTC';
exports.TimeZone = TimeZone;
const UtcOffset = ()=>'+03:00';
exports.UtcOffset = UtcOffset;
const Duration = ()=>'P3Y6M4DT12H30M5S';
exports.Duration = Duration;
exports.ISO8601Duration = exports.Duration;
const LocalDate = ()=>'2020-07-19';
exports.LocalDate = LocalDate;
const LocalTime = ()=>'08:45:59';
exports.LocalTime = LocalTime;
const LocalDateTime = ()=>'2020-07-19T08:45:59';
exports.LocalDateTime = LocalDateTime;
const LocalEndTime = ()=>'24:00:00';
exports.LocalEndTime = LocalEndTime;
const EmailAddress = ()=>'test@test.com';
exports.EmailAddress = EmailAddress;
const NegativeFloat = ()=>-123.45;
exports.NegativeFloat = NegativeFloat;
const NegativeInt = ()=>-123;
exports.NegativeInt = NegativeInt;
const NonEmptyString = ()=>'string';
exports.NonEmptyString = NonEmptyString;
const NonNegativeFloat = ()=>123.45;
exports.NonNegativeFloat = NonNegativeFloat;
exports.UnsignedFloat = exports.NonNegativeFloat;
const NonNegativeInt = ()=>123;
exports.NonNegativeInt = NonNegativeInt;
exports.UnsignedInt = exports.NonNegativeInt;
const NonPositiveFloat = ()=>-123.45;
exports.NonPositiveFloat = NonPositiveFloat;
const NonPositiveInt = ()=>-123;
exports.NonPositiveInt = NonPositiveInt;
const PhoneNumber = ()=>'+17895551234';
exports.PhoneNumber = PhoneNumber;
const ObjectID = ()=>'5e5677d71bdc2ae76344968c';
exports.ObjectID = ObjectID;
const PositiveFloat = ()=>123.45;
exports.PositiveFloat = PositiveFloat;
const PositiveInt = ()=>123;
exports.PositiveInt = PositiveInt;
const PostalCode = ()=>'60031';
exports.PostalCode = PostalCode;
const URLMock = ()=>new URL('http://www.test.com/');
exports.URL = URLMock;
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
const UUID = ()=>{
    // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); // use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        // tslint:disable-next-line: no-bitwise
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        // tslint:disable-next-line: no-bitwise
        return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
};
exports.UUID = UUID;
exports.GUID = exports.UUID;
const HexColorCode = ()=>'#' + Math.floor(Math.random() * 16777215).toString(16);
exports.HexColorCode = HexColorCode;
const Hexadecimal = ()=>Math.floor(Math.random() * 16777215).toString(16);
exports.Hexadecimal = Hexadecimal;
const randomVal = (min, max)=>{
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
// https://codepen.io/meowwwls/pen/jbEJRp
const HSL = ()=>`hsl(${randomVal(0, 360)}, ${randomVal(30, 95)}%, ${randomVal(30, 80)}%)`;
exports.HSL = HSL;
const HSLA = ()=>`hsla(${randomVal(0, 360)}, ${randomVal(30, 95)}%, ${randomVal(30, 80)}%, ${Math.random()})`;
exports.HSLA = HSLA;
const IP = ()=>'2001:0db8:85a3:0000:0000:8a2e:0370:7334';
exports.IP = IP;
// https://stackoverflow.com/questions/43464519/creating-fake-ip-address-using-javascript
const IPv4 = ()=>Math.floor(Math.random() * 255) + 1 + '.' + (Math.floor(Math.random() * 255) + 0) + '.' + (Math.floor(Math.random() * 255) + 0) + '.' + (Math.floor(Math.random() * 255) + 0);
exports.IPv4 = IPv4;
const IPv6 = ()=>'2001:0db8:85a3:0000:0000:8a2e:0370:7334';
exports.IPv6 = IPv6;
// http://jsfiddle.net/guest271314/qhbC9/
const MAC = ()=>'XX:XX:XX:XX:XX:XX'.replace(/X/g, ()=>'0123456789ABCDEF'.charAt(Math.floor(Math.random() * 16)));
exports.MAC = MAC;
const Port = ()=>randomVal(0, 65535);
exports.Port = Port;
const RGB = ()=>`rgb(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)})`;
exports.RGB = RGB;
const RGBA = ()=>`rgba(${randomVal(0, 255)}, ${randomVal(0, 255)}, ${randomVal(0, 255)}, ${Math.random()})`;
exports.RGBA = RGBA;
const ISBN = ()=>`978-3-16-148410-0`;
exports.ISBN = ISBN;
const JWT = ()=>{
    // HEADER: {
    //   "alg": "HS256",
    //   "typ": "JWT"
    // }
    //
    // PAYLOAD: {
    //   "sub": "1234567890",
    //   "iat": 1516239022,
    //   "project": "graphql-scalars"
    // }
    //
    // SIGNATURE: {
    //   HMACSHA256(
    //     base64UrlEncode(header) + "." +
    //     base64UrlEncode(payload),
    //     password
    //   )
    // }
    return `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9qZWN0IjoiZ3JhcGhxbC1zY2FsYXJzIn0.nYdrSfE2nNRAgpiEU1uKgn2AYYKLo28Z0nhPXvsuIww`;
};
exports.JWT = JWT;
const Latitude = ()=>41.902782;
exports.Latitude = Latitude;
const Longitude = ()=>12.496366;
exports.Longitude = Longitude;
const USCurrency = ()=>1000;
exports.USCurrency = USCurrency;
const Currency = ()=>'USD';
exports.Currency = Currency;
const JSON = ()=>({});
exports.JSON = JSON;
const JSONObject = ()=>({});
exports.JSONObject = JSONObject;
const IBAN = ()=>'NL55INGB4789170233';
exports.IBAN = IBAN;
const Void = ()=>null;
exports.Void = Void;
const SafeInt = ()=>Number.MAX_SAFE_INTEGER;
exports.SafeInt = SafeInt;
const DID = ()=>'did:example:123456789abcdefghi';
exports.DID = DID;
const CountryCode = ()=>'US';
exports.CountryCode = CountryCode;
const Locale = ()=>'zh-cmn-Hans-CN';
exports.Locale = Locale;
const RoutingNumber = ()=>'111000025';
exports.RoutingNumber = RoutingNumber;
const AccountNumber = ()=>'000000012345';
exports.AccountNumber = AccountNumber;
const Cuid = ()=>'cjld2cyuq0000t3rmniod1foy';
exports.Cuid = Cuid;
const SemVer = ()=>'1.0.0-alpha.1';
exports.SemVer = SemVer;
const SESSN = ()=>'194907011813';
exports.SESSN = SESSN;
const DeweyDecimal = ()=>'435.4357';
exports.DeweyDecimal = DeweyDecimal;
const LCCSubclass = ()=>'KBM';
exports.LCCSubclass = LCCSubclass;
const IPCPatent = ()=>'G06F 12/803';
exports.IPCPatent = IPCPatent;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createGraphQLError = createGraphQLError;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
function createGraphQLError(message, options) {
    if (graphql_1.versionInfo.major >= 17) {
        return new graphql_1.GraphQLError(message, options);
    }
    return new graphql_1.GraphQLError(message, options === null || options === void 0 ? void 0 : options.nodes, options === null || options === void 0 ? void 0 : options.source, options === null || options === void 0 ? void 0 : options.positions, options === null || options === void 0 ? void 0 : options.path, options === null || options === void 0 ? void 0 : options.originalError, options === null || options === void 0 ? void 0 : options.extensions);
}
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/codegenScalarType.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateGeoJSONType = void 0;
// Helper function to generate Position type
const generatePositionType = ()=>`[number, number] | [number, number, number]`;
// Helper function to generate BBox type
const generateBBoxType = ()=>`[number, number, number, number] | [number, number, number, number, number, number]`;
// Helper function to generate Point type
const generatePointType = ()=>`{
  type: "Point";
  coordinates: ${generatePositionType()};
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate MultiPoint type
const generateMultiPointType = ()=>`{
  type: "MultiPoint";
  coordinates: ${generatePositionType()}[];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate LineString type
const generateLineStringType = ()=>`{
  type: "LineString";
  coordinates: ${generatePositionType()}[];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate MultiLineString type
const generateMultiLineStringType = ()=>`{
  type: "MultiLineString";
  coordinates: ${generatePositionType()}[][];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate Polygon type
const generatePolygonType = ()=>`{
  type: "Polygon";
  coordinates: ${generatePositionType()}[][];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate MultiPolygon type
const generateMultiPolygonType = ()=>`{
  type: "MultiPolygon";
  coordinates: ${generatePositionType()}[][][];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate GeometryCollection type
const generateGeometryCollectionType = ()=>`{
  type: "GeometryCollection";
  geometries: (${generatePointType()} | ${generateMultiPointType()} | ${generateLineStringType()} | ${generateMultiLineStringType()} | ${generatePolygonType()} | ${generateMultiPolygonType()})[];
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate Feature type
const generateFeatureType = ()=>`{
  type: "Feature";
  geometry: (${generatePointType()} | ${generateMultiPointType()} | ${generateLineStringType()} | ${generateMultiLineStringType()} | ${generatePolygonType()} | ${generateMultiPolygonType()} | ${generateGeometryCollectionType()}) | null;
  properties: { [key: string]: any } | null;
  bbox?: ${generateBBoxType()};
}`;
// Helper function to generate FeatureCollection type
const generateFeatureCollectionType = ()=>`{
  type: "FeatureCollection";
  features: ${generateFeatureType()}[];
  bbox?: ${generateBBoxType()};
}`;
// Generate the complete GeoJSON type
const generateGeoJSONType = ()=>`(${generatePointType()} | ${generateMultiPointType()} | ${generateLineStringType()} | ${generateMultiLineStringType()} | ${generatePolygonType()} | ${generateMultiPolygonType()} | ${generateGeometryCollectionType()} | ${generateFeatureType()} | ${generateFeatureCollectionType()})`;
exports.generateGeoJSONType = generateGeoJSONType;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/jsonSchema.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.geojsonSchema = void 0;
exports.geojsonSchema = {
    title: 'GeoJSON',
    type: 'object',
    required: [
        'type'
    ],
    oneOf: [
        {
            $ref: '#/definitions/Point'
        },
        {
            $ref: '#/definitions/MultiPoint'
        },
        {
            $ref: '#/definitions/LineString'
        },
        {
            $ref: '#/definitions/MultiLineString'
        },
        {
            $ref: '#/definitions/Polygon'
        },
        {
            $ref: '#/definitions/MultiPolygon'
        },
        {
            $ref: '#/definitions/GeometryCollection'
        },
        {
            $ref: '#/definitions/Feature'
        },
        {
            $ref: '#/definitions/FeatureCollection'
        }
    ],
    definitions: {
        Position: {
            type: 'array',
            minItems: 2,
            maxItems: 3,
            items: {
                type: 'number'
            }
        },
        Point: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'Point'
                    ]
                },
                coordinates: {
                    $ref: '#/definitions/Position'
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        MultiPoint: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'MultiPoint'
                    ]
                },
                coordinates: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Position'
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        LineString: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'LineString'
                    ]
                },
                coordinates: {
                    type: 'array',
                    minItems: 2,
                    items: {
                        $ref: '#/definitions/Position'
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        MultiLineString: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'MultiLineString'
                    ]
                },
                coordinates: {
                    type: 'array',
                    items: {
                        type: 'array',
                        minItems: 2,
                        items: {
                            $ref: '#/definitions/Position'
                        }
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        Polygon: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'Polygon'
                    ]
                },
                coordinates: {
                    type: 'array',
                    items: {
                        type: 'array',
                        minItems: 4,
                        items: {
                            $ref: '#/definitions/Position'
                        }
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        MultiPolygon: {
            type: 'object',
            required: [
                'type',
                'coordinates'
            ],
            properties: {
                type: {
                    enum: [
                        'MultiPolygon'
                    ]
                },
                coordinates: {
                    type: 'array',
                    items: {
                        type: 'array',
                        items: {
                            type: 'array',
                            minItems: 4,
                            items: {
                                $ref: '#/definitions/Position'
                            }
                        }
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        GeometryCollection: {
            type: 'object',
            required: [
                'type',
                'geometries'
            ],
            properties: {
                type: {
                    enum: [
                        'GeometryCollection'
                    ]
                },
                geometries: {
                    type: 'array',
                    items: {
                        oneOf: [
                            {
                                $ref: '#/definitions/Point'
                            },
                            {
                                $ref: '#/definitions/MultiPoint'
                            },
                            {
                                $ref: '#/definitions/LineString'
                            },
                            {
                                $ref: '#/definitions/MultiLineString'
                            },
                            {
                                $ref: '#/definitions/Polygon'
                            },
                            {
                                $ref: '#/definitions/MultiPolygon'
                            }
                        ]
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        Feature: {
            type: 'object',
            required: [
                'type',
                'geometry',
                'properties'
            ],
            properties: {
                type: {
                    enum: [
                        'Feature'
                    ]
                },
                geometry: {
                    oneOf: [
                        {
                            type: 'null'
                        },
                        {
                            $ref: '#/definitions/Point'
                        },
                        {
                            $ref: '#/definitions/MultiPoint'
                        },
                        {
                            $ref: '#/definitions/LineString'
                        },
                        {
                            $ref: '#/definitions/MultiLineString'
                        },
                        {
                            $ref: '#/definitions/Polygon'
                        },
                        {
                            $ref: '#/definitions/MultiPolygon'
                        },
                        {
                            $ref: '#/definitions/GeometryCollection'
                        }
                    ]
                },
                properties: {
                    oneOf: [
                        {
                            type: 'null'
                        },
                        {
                            type: 'object'
                        }
                    ]
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        },
        FeatureCollection: {
            type: 'object',
            required: [
                'type',
                'features'
            ],
            properties: {
                type: {
                    enum: [
                        'FeatureCollection'
                    ]
                },
                features: {
                    type: 'array',
                    items: {
                        $ref: '#/definitions/Feature'
                    }
                },
                bbox: {
                    type: 'array',
                    minItems: 4,
                    maxItems: 6,
                    items: {
                        type: 'number'
                    }
                }
            }
        }
    }
};
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/validators.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidBBox = exports.isValidFeatureCollection = exports.isValidFeature = exports.isValidGeometry = void 0;
// Validation functions
const isValidPosition = (coords)=>{
    return Array.isArray(coords) && (coords.length === 2 || coords.length === 3) && coords.every((c)=>typeof c === 'number') && coords[0] >= -180 && coords[0] <= 180 && // longitude
    coords[1] >= -90 && coords[1] <= 90 // latitude
    ;
};
/*const isValidPoint = (geometry: any): boolean => {
  return geometry.type === 'Point' && isValidPosition(geometry.coordinates);
};*/ const isValidPoint = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'Point' && 'coordinates' in geometry && isValidPosition(geometry.coordinates);
};
/*const isValidMultiPoint = (geometry: any): boolean => {
  return (
    geometry.type === 'MultiPoint' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.every(isValidPosition)
  );
};*/ const isValidMultiPoint = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'MultiPoint' && 'coordinates' in geometry && Array.isArray(geometry.coordinates) && geometry.coordinates.every(isValidPosition);
};
/*const isValidLineString = (geometry: any): boolean => {
  return (
    geometry.type === 'LineString' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.length >= 2 &&
    geometry.coordinates.every(isValidPosition)
  );
};*/ const isValidLineString = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'LineString' && 'coordinates' in geometry && Array.isArray(geometry.coordinates) && geometry.coordinates.length >= 2 && geometry.coordinates.every((pos)=>isValidPosition(pos));
};
/*const isValidMultiLineString = (geometry: {
  type: string;
  coordinates: MultiLineStringCoordinates;
}): boolean => {
  return (
    geometry.type === 'MultiLineString' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.every(
      line => Array.isArray(line) && line.length >= 2 && line.every(isValidPosition),
    )
  );
};*/ const isValidMultiLineString = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'MultiLineString' && 'coordinates' in geometry && Array.isArray(geometry.coordinates) && geometry.coordinates.every((line)=>Array.isArray(line) && line.length >= 2 && line.every((pos)=>isValidPosition(pos)));
};
/*const isValidPolygon = (geometry: { type: string; coordinates: PolygonCoordinates }): boolean => {
  return (
    geometry.type === 'Polygon' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.every(
      ring =>
        Array.isArray(ring) &&
        ring.length >= 4 &&
        ring.every(isValidPosition) &&
        JSON.stringify(ring[0]) === JSON.stringify(ring[ring.length - 1]), // First and last positions must be equivalent
    )
  );
};*/ const isValidPolygon = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'Polygon' && 'coordinates' in geometry && Array.isArray(geometry.coordinates) && geometry.coordinates.every((ring)=>Array.isArray(ring) && ring.length >= 4 && ring.every((pos)=>isValidPosition(pos)) && JSON.stringify(ring[0]) === JSON.stringify(ring[ring.length - 1]));
};
/*const isValidMultiPolygon = (geometry: {
  type: string;
  coordinates: MultiPolygonCoordinates;
}): boolean => {
  return (
    geometry.type === 'MultiPolygon' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.every(
      polygon =>
        Array.isArray(polygon) &&
        polygon.every(
          ring =>
            Array.isArray(ring) &&
            ring.length >= 4 &&
            ring.every(isValidPosition) &&
            JSON.stringify(ring[0]) === JSON.stringify(ring[ring.length - 1]),
        ),
    )
  );
};*/ const isValidMultiPolygon = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'MultiPolygon' && 'coordinates' in geometry && Array.isArray(geometry.coordinates) && geometry.coordinates.every((polygon)=>Array.isArray(polygon) && polygon.every((ring)=>Array.isArray(ring) && ring.length >= 4 && ring.every((pos)=>isValidPosition(pos)) && JSON.stringify(ring[0]) === JSON.stringify(ring[ring.length - 1])));
};
/*const isValidGeometryCollection = (geometry: any): boolean => {
  return (
    geometry.type === 'GeometryCollection' &&
    Array.isArray(geometry.geometries) &&
    geometry.geometries.every(isValidGeometry)
  );
};*/ const isValidGeometryCollection = (geometry)=>{
    return typeof geometry === 'object' && geometry !== null && 'type' in geometry && geometry.type === 'GeometryCollection' && 'geometries' in geometry && Array.isArray(geometry.geometries) && geometry.geometries.every(exports.isValidGeometry);
};
const isValidGeometry = (geometry)=>{
    if (!geometry || typeof geometry !== 'object') return false;
    if (!('type' in geometry)) return false;
    switch(geometry.type){
        case 'Point':
            return isValidPoint(geometry);
        case 'MultiPoint':
            return isValidMultiPoint(geometry);
        case 'LineString':
            return isValidLineString(geometry);
        case 'MultiLineString':
            return isValidMultiLineString(geometry);
        case 'Polygon':
            return isValidPolygon(geometry);
        case 'MultiPolygon':
            return isValidMultiPolygon(geometry);
        case 'GeometryCollection':
            return isValidGeometryCollection(geometry);
        default:
            return false;
    }
};
exports.isValidGeometry = isValidGeometry;
/*const isValidFeature = (obj: any): boolean => {
  return (
    obj.type === 'Feature' &&
    (obj.geometry === null || isValidGeometry(obj.geometry)) &&
    (obj.properties === undefined || obj.properties === null || typeof obj.properties === 'object')
  );
};*/ const isValidFeature = (obj)=>{
    return typeof obj === 'object' && obj !== null && 'type' in obj && obj.type === 'Feature' && 'geometry' in obj && 'properties' in obj && (obj.geometry === null || (0, exports.isValidGeometry)(obj.geometry)) && (obj.properties === null || typeof obj.properties === 'object' && obj.properties !== null);
};
exports.isValidFeature = isValidFeature;
/*const isValidFeatureCollection = (obj: any): boolean => {
  return (
    obj.type === 'FeatureCollection' &&
    Array.isArray(obj.features) &&
    obj.features.every(isValidFeature)
  );
};*/ const isValidFeatureCollection = (obj)=>{
    return typeof obj === 'object' && obj !== null && 'type' in obj && obj.type === 'FeatureCollection' && 'features' in obj && Array.isArray(obj.features) && obj.features.every(exports.isValidFeature);
};
exports.isValidFeatureCollection = isValidFeatureCollection;
/*const isValidBBox = (bbox: BBox): boolean => {
  return (
    Array.isArray(bbox) &&
    //[4, 6].includes(bbox.length) && // should be less faster, though negligible
    (bbox.length === 4 || bbox.length === 6) &&
    bbox.every(n => typeof n === 'number')
  );
};*/ const isValidBBox = (bbox)=>{
    return Array.isArray(bbox) && (bbox.length === 4 || bbox.length === 6) && bbox.every((n)=>typeof n === 'number');
};
exports.isValidBBox = isValidBBox;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/GeoJSON.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLGeoJSON = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const codegenScalarType_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/codegenScalarType.js [app-route] (ecmascript)");
const jsonSchema_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/jsonSchema.js [app-route] (ecmascript)");
const validators_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/validators.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    let parsed;
    if (typeof value === 'string') {
        try {
            parsed = JSON.parse(value);
        } catch (_a) {
            throw (0, error_js_1.createGraphQLError)('Invalid GeoJSON: Failed to parse JSON string', ast ? {
                nodes: ast
            } : undefined);
        }
    } else {
        parsed = value;
    }
    if (!parsed || typeof parsed !== 'object') {
        throw (0, error_js_1.createGraphQLError)('Invalid GeoJSON: Must be an object', ast ? {
            nodes: ast
        } : undefined);
    }
    if (!('type' in parsed)) {
        throw (0, error_js_1.createGraphQLError)('Invalid GeoJSON: Missing type property', ast ? {
            nodes: ast
        } : undefined);
    }
    // Validate bbox if present
    if ('bbox' in parsed && parsed.bbox !== undefined) {
        if (!(0, validators_js_1.isValidBBox)(parsed.bbox)) {
            throw (0, error_js_1.createGraphQLError)('Invalid GeoJSON: Invalid bbox format', ast ? {
                nodes: ast
            } : undefined);
        }
    }
    // Validate based on type
    /*if (parsed.type === 'Feature') {
      if (!isValidFeature(parsed)) {
        throw createGraphQLError(
          'Invalid GeoJSON: Invalid Feature object',
          ast ? { nodes: ast } : undefined,
        );
      }
    } else if (parsed.type === 'FeatureCollection') {
      if (!isValidFeatureCollection(parsed)) {
        throw createGraphQLError(
          'Invalid GeoJSON: Invalid FeatureCollection object',
          ast ? { nodes: ast } : undefined,
        );
      }
    } else if (!isValidGeometry(parsed)) {
      throw createGraphQLError(
        'Invalid GeoJSON: Invalid Geometry object',
        ast ? { nodes: ast } : undefined,
      );
    }*/ if ((0, validators_js_1.isValidFeature)(parsed)) {
        return parsed;
    } else if ((0, validators_js_1.isValidFeatureCollection)(parsed)) {
        return parsed;
    } else if ((0, validators_js_1.isValidGeometry)(parsed)) {
        return parsed;
    }
    // return parsed as GeoJSONObject;
    throw (0, error_js_1.createGraphQLError)('Invalid GeoJSON: Object does not match any valid GeoJSON type', ast ? {
        nodes: ast
    } : undefined);
};
exports.GraphQLGeoJSON = new graphql_1.GraphQLScalarType({
    name: 'GeoJSON',
    description: 'A GeoJSON object as defined by RFC 7946: https://datatracker.ietf.org/doc/html/rfc7946',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING && ast.kind !== graphql_1.Kind.OBJECT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings or objects as GeoJSON but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.kind === graphql_1.Kind.STRING ? ast.value : ast, ast);
    },
    extensions: {
        codegenScalarType: (0, codegenScalarType_js_1.generateGeoJSONType)(),
        jsonSchema: jsonSchema_js_1.geojsonSchema
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLGeoJSON = void 0;
var GeoJSON_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/GeoJSON.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLGeoJSON", {
    enumerable: true,
    get: function() {
        return GeoJSON_js_1.GraphQLGeoJSON;
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/CountryName.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLCountryName = exports.COUNTRY_NAMES = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
exports.COUNTRY_NAMES = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia, Plurinational State of',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo, Republic of the',
    'Congo, Democratic Republic of the',
    'Cook Islands',
    'Costa Rica',
    "Côte d'Ivoire",
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran, Islamic Republic of',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    "Korea, Democratic People's Republic of",
    'Korea, Republic of',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia, Federated States of',
    'Moldova, Republic of',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands, Kingdom of the',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'North Macedonia',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Réunion',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'São Tomé and Príncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan, Province of China',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Türkiye',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States of America',
    'United States Minor Outlying Islands',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela, Bolivarian Republic of',
    'Viet Nam',
    'Virgin Islands (British)',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];
const COUNTRY_NAMES_SET = new Set(exports.COUNTRY_NAMES);
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    const normalizedValue = value.trim();
    if (!COUNTRY_NAMES_SET.has(normalizedValue)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid country name: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return normalizedValue;
};
exports.GraphQLCountryName = new graphql_1.GraphQLScalarType({
    name: 'CountryName',
    description: 'A country name (short name) as defined by ISO 3166-1',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as country names but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        //codegenScalarType: 'string',
        codegenScalarType: `(${exports.COUNTRY_NAMES.map((name)=>`"${name}"`).join(' | ')})`,
        jsonSchema: {
            title: 'CountryName',
            type: 'string',
            enum: exports.COUNTRY_NAMES
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/formatter.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeDateTimeString = exports.parseDateTime = exports.serializeDate = exports.parseDate = exports.serializeTimeString = exports.serializeTime = exports.parseTime = void 0;
// Parses an RFC 3339 compliant time-string into a Date.
// It does this by combining the current date with the time-string
// to create a new Date instance.
//
// Example:
// Suppose the current date is 2016-01-01, then
// parseTime('11:00:12Z') parses to a Date corresponding to
// 2016-01-01T11:00:12Z.
const parseTime = (time)=>{
    const currentDateString = new Date().toISOString();
    return new Date(currentDateString.substr(0, currentDateString.indexOf('T') + 1) + time);
};
exports.parseTime = parseTime;
// Serializes a Date into an RFC 3339 compliant time-string in the
// format hh:mm:ss.sssZ.
const serializeTime = (date)=>{
    const dateTimeString = date.toISOString();
    return dateTimeString.substr(dateTimeString.indexOf('T') + 1);
};
exports.serializeTime = serializeTime;
// Serializes an RFC 3339 compliant time-string by shifting
// it to UTC.
const serializeTimeString = (time)=>{
    // If already formatted to UTC then return the time string
    if (time.indexOf('Z') !== -1) {
        return time;
    } else {
        // These are time-strings with timezone information,
        // these need to be shifted to UTC.
        // Convert to UTC time string in
        // format hh:mm:ss.sssZ.
        const date = (0, exports.parseTime)(time);
        let timeUTC = (0, exports.serializeTime)(date);
        // Regex to look for fractional second part in time string
        // such as 00:00:00.345+01:00
        const regexFracSec = /\.\d{1,}/;
        // Retrieve the fractional second part of the time
        // string if it exists.
        const fractionalPart = time.match(regexFracSec);
        if (fractionalPart == null) {
            // These are time-strings without the fractional
            // seconds. So we remove them from the UTC time-string.
            timeUTC = timeUTC.replace(regexFracSec, '');
            return timeUTC;
        } else {
            // These are time-string with fractional seconds.
            // Make sure that we inject the fractional
            // second part back in. The `timeUTC` variable
            // has millisecond precision, we may want more or less
            // depending on the string that was passed.
            timeUTC = timeUTC.replace(regexFracSec, fractionalPart[0]);
            return timeUTC;
        }
    }
};
exports.serializeTimeString = serializeTimeString;
// Parses an RFC 3339 compliant date-string into a Date.
//
// Example:
// parseDate('2016-01-01') parses to a Date corresponding to
// 2016-01-01T00:00:00.000Z.
const parseDate = (date)=>{
    return new Date(date);
};
exports.parseDate = parseDate;
// Serializes a Date into a RFC 3339 compliant date-string
// in the format YYYY-MM-DD.
const serializeDate = (date)=>{
    return date.toISOString().split('T')[0];
};
exports.serializeDate = serializeDate;
// Parses an RFC 3339 compliant date-time-string into a Date.
const parseDateTime = (dateTime)=>{
    return new Date(dateTime);
};
exports.parseDateTime = parseDateTime;
// Serializes an RFC 3339 compliant date-time-string by shifting
// it to UTC.
const serializeDateTimeString = (dateTime)=>{
    // If already formatted to UTC then return the time string
    if (dateTime.indexOf('Z') !== -1) {
        return new Date(dateTime);
    } else {
        // These are time-strings with timezone information,
        // these need to be shifted to UTC.
        // Convert to UTC time string in
        // format YYYY-MM-DDThh:mm:ss.sssZ.
        let dateTimeUTC = new Date(dateTime).toISOString();
        // Regex to look for fractional second part in date-time string
        const regexFracSec = /\.\d{1,}/;
        // Retrieve the fractional second part of the time
        // string if it exists.
        const fractionalPart = dateTime.match(regexFracSec);
        if (fractionalPart == null) {
            // The date-time-string has no fractional part,
            // so we remove it from the dateTimeUTC variable.
            dateTimeUTC = dateTimeUTC.replace(regexFracSec, '');
            return new Date(dateTimeUTC);
        } else {
            // These are datetime-string with fractional seconds.
            // Make sure that we inject the fractional
            // second part back in. The `dateTimeUTC` variable
            // has millisecond precision, we may want more or less
            // depending on the string that was passed.
            dateTimeUTC = dateTimeUTC.replace(regexFracSec, fractionalPart[0]);
            return new Date(dateTimeUTC);
        }
    }
};
exports.serializeDateTimeString = serializeDateTimeString;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/validator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.validateJSDate = exports.validateUnixTimestamp = exports.validateDateTime = exports.validateDate = exports.validateTime = void 0;
// Check whether a certain year is a leap year.
//
// Every year that is exactly divisible by four
// is a leap year, except for years that are exactly
// divisible by 100, but these centurial years are
// leap years if they are exactly divisible by 400.
// For example, the years 1700, 1800, and 1900 are not leap years,
// but the years 1600 and 2000 are.
//
const leapYear = (year)=>{
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};
// Function that checks whether a time-string is RFC 3339 compliant.
//
// It checks whether the time-string is structured in one of the
// following formats:
//
// - hh:mm:ssZ
// - hh:mm:ss±hh:mm
// - hh:mm:ss.*sZ
// - hh:mm:ss.*s±hh:mm
//
// Where *s is a fraction of seconds with at least 1 digit.
//
// Note, this validator assumes that all minutes have
// 59 seconds. This assumption does not follow RFC 3339
// which includes leap seconds (in which case it is possible that
// there are 60 seconds in a minute).
//
// Leap seconds are ignored because it adds complexity in
// the following areas:
// - The native Javascript Date ignores them; i.e. Date.parse('1972-12-31T23:59:60Z')
//   equals NaN.
// - Leap seconds cannot be known in advance.
//
const validateTime = (time)=>{
    time = time === null || time === void 0 ? void 0 : time.toUpperCase();
    const TIME_REGEX = /^([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;
    return TIME_REGEX.test(time);
};
exports.validateTime = validateTime;
// Function that checks whether a date-string is RFC 3339 compliant.
//
// It checks whether the date-string is a valid date in the YYYY-MM-DD.
//
// Note, the number of days in each date are determined according to the
// following lookup table:
//
// Month Number  Month/Year           Maximum value of date-mday
// ------------  ----------           --------------------------
// 01            January              31
// 02            February, normal     28
// 02            February, leap year  29
// 03            March                31
// 04            April                30
// 05            May                  31
// 06            June                 30
// 07            July                 31
// 08            August               31
// 09            September            30
// 10            October              31
// 11            November             30
// 12            December             31
//
const validateDate = (datestring)=>{
    const RFC_3339_REGEX = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]))$/;
    if (!RFC_3339_REGEX.test(datestring)) {
        return false;
    }
    // Verify the correct number of days for
    // the month contained in the date-string.
    const year = Number(datestring.substr(0, 4));
    const month = Number(datestring.substr(5, 2));
    const day = Number(datestring.substr(8, 2));
    switch(month){
        case 2:
            if (leapYear(year) && day > 29) {
                return false;
            } else if (!leapYear(year) && day > 28) {
                return false;
            }
            return true;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day > 30) {
                return false;
            }
            break;
    }
    return true;
};
exports.validateDate = validateDate;
// Function that checks whether a date-time-string is RFC 3339 compliant.
//
// It checks whether the time-string is structured in one of the
//
// - YYYY-MM-DDThh:mm:ssZ
// - YYYY-MM-DDThh:mm:ss±hh:mm
// - YYYY-MM-DDThh:mm:ss.*sZ
// - YYYY-MM-DDThh:mm:ss.*s±hh:mm
//
// Where *s is a fraction of seconds with at least 1 digit.
//
const validateDateTime = (dateTimeString)=>{
    dateTimeString = dateTimeString === null || dateTimeString === void 0 ? void 0 : dateTimeString.toUpperCase();
    const RFC_3339_REGEX = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;
    // Validate the structure of the date-string
    if (!RFC_3339_REGEX.test(dateTimeString)) {
        return false;
    }
    // Check if it is a correct date using the javascript Date parse() method.
    const time = Date.parse(dateTimeString);
    if (time !== time) {
        // eslint-disable-line
        return false;
    }
    // Split the date-time-string up into the string-date and time-string part.
    // and check whether these parts are RFC 3339 compliant.
    const index = dateTimeString.indexOf('T');
    const dateString = dateTimeString.substr(0, index);
    const timeString = dateTimeString.substr(index + 1);
    return (0, exports.validateDate)(dateString) && (0, exports.validateTime)(timeString);
};
exports.validateDateTime = validateDateTime;
// Function that checks whether a given number is a valid
// Unix timestamp.
//
// Unix timestamps are signed 32-bit integers. They are interpreted
// as the number of seconds since 00:00:00 UTC on 1 January 1970.
//
const validateUnixTimestamp = (timestamp)=>{
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    return timestamp === timestamp && timestamp <= MAX_INT && timestamp >= MIN_INT; // eslint-disable-line
};
exports.validateUnixTimestamp = validateUnixTimestamp;
// Function that checks whether a javascript Date instance
// is valid.
//
const validateJSDate = (date)=>{
    const time = date.getTime();
    return time === time; // eslint-disable-line
};
exports.validateJSDate = validateJSDate;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Date.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDate = exports.GraphQLDateConfig = void 0;
/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/formatter.js [app-route] (ecmascript)");
const validator_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/validator.js [app-route] (ecmascript)");
exports.GraphQLDateConfig = {
    name: 'Date',
    description: 'A date string, such as 2007-12-03, compliant with the `full-date` ' + 'format outlined in section 5.6 of the RFC 3339 profile of the ' + 'ISO 8601 standard for representation of dates and times using ' + 'the Gregorian calendar.',
    serialize (value) {
        if (value instanceof Date) {
            if ((0, validator_js_1.validateJSDate)(value)) {
                return (0, formatter_js_1.serializeDate)(value);
            }
            throw (0, error_js_1.createGraphQLError)('Date cannot represent an invalid Date instance');
        } else if (typeof value === 'string') {
            if ((0, validator_js_1.validateDate)(value)) {
                return value;
            }
            throw (0, error_js_1.createGraphQLError)(`Date cannot represent an invalid date-string ${value}.`);
        } else {
            throw (0, error_js_1.createGraphQLError)('Date cannot represent a non string, or non Date type ' + JSON.stringify(value));
        }
    },
    parseValue (value) {
        if (!(typeof value === 'string')) {
            throw (0, error_js_1.createGraphQLError)(`Date cannot represent non string type ${JSON.stringify(value)}`);
        }
        if ((0, validator_js_1.validateDate)(value)) {
            return (0, formatter_js_1.parseDate)(value);
        }
        throw (0, error_js_1.createGraphQLError)(`Date cannot represent an invalid date-string ${value}.`);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Date cannot represent non string type ${'value' in ast && ast.value}`, {
                nodes: ast
            });
        }
        const { value } = ast;
        if ((0, validator_js_1.validateDate)(value)) {
            return (0, formatter_js_1.parseDate)(value);
        }
        throw (0, error_js_1.createGraphQLError)(`Date cannot represent an invalid date-string ${String(value)}.`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'Date | string',
        jsonSchema: {
            type: 'string',
            format: 'date'
        }
    }
};
/**
 * An RFC 3339 compliant date scalar.
 *
 * Input:
 *    This scalar takes an RFC 3339 date string as input and
 *    parses it to a javascript Date.
 *
 * Output:
 *    This scalar serializes javascript Dates and
 *    RFC 3339 date strings to RFC 3339 date strings.
 */ exports.GraphQLDate = new graphql_1.GraphQLScalarType(exports.GraphQLDateConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Time.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLTime = void 0;
/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/formatter.js [app-route] (ecmascript)");
// eslint-disable-line
const validator_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/validator.js [app-route] (ecmascript)");
/**
 * An RFC 3339 compliant time scalar.
 *
 * Input:
 *    This scalar takes an RFC 3339 time string as input and
 *    parses it to a javascript Date (with a year-month-day relative
 *    to the current day).
 *
 * Output:
 *    This scalar serializes javascript Dates and
 *    RFC 3339 time strings to RFC 3339 UTC time strings.
 */ const config = {
    name: 'Time',
    description: 'A time string at UTC, such as 10:15:30Z, compliant with ' + 'the `full-time` format outlined in section 5.6 of the RFC 3339' + 'profile of the ISO 8601 standard for representation of dates and ' + 'times using the Gregorian calendar.',
    serialize (value) {
        if (value instanceof Date) {
            if ((0, validator_js_1.validateJSDate)(value)) {
                return (0, formatter_js_1.serializeTime)(value);
            }
            throw (0, error_js_1.createGraphQLError)('Time cannot represent an invalid Date instance');
        } else if (typeof value === 'string') {
            if ((0, validator_js_1.validateTime)(value)) {
                return (0, formatter_js_1.serializeTimeString)(value);
            }
            throw (0, error_js_1.createGraphQLError)(`Time cannot represent an invalid time-string ${value}.`);
        } else {
            throw (0, error_js_1.createGraphQLError)('Time cannot be serialized from a non string, ' + 'or non Date type ' + JSON.stringify(value));
        }
    },
    parseValue (value) {
        if (!(typeof value === 'string')) {
            throw (0, error_js_1.createGraphQLError)(`Time cannot represent non string type ${JSON.stringify(value)}`);
        }
        if ((0, validator_js_1.validateTime)(value)) {
            return (0, formatter_js_1.parseTime)(value);
        }
        throw (0, error_js_1.createGraphQLError)(`Time cannot represent an invalid time-string ${value}.`);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Time cannot represent non string type ${'value' in ast && ast.value}`, {
                nodes: ast
            });
        }
        const value = ast.value;
        if ((0, validator_js_1.validateTime)(value)) {
            return (0, formatter_js_1.parseTime)(value);
        }
        throw (0, error_js_1.createGraphQLError)(`Time cannot represent an invalid time-string ${String(value)}.`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'Date | string',
        jsonSchema: {
            type: 'string',
            format: 'time'
        }
    }
};
exports.GraphQLTime = new graphql_1.GraphQLScalarType(config);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/DateTime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDateTime = exports.GraphQLDateTimeConfig = void 0;
/**
 * Copyright (c) 2017, Dirk-Jan Rutten
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const formatter_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/formatter.js [app-route] (ecmascript)");
// eslint-disable-line
const validator_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/validator.js [app-route] (ecmascript)");
exports.GraphQLDateTimeConfig = {
    name: 'DateTime',
    description: 'A date-time string at UTC, such as 2007-12-03T10:15:30Z, ' + 'compliant with the `date-time` format outlined in section 5.6 of ' + 'the RFC 3339 profile of the ISO 8601 standard for representation ' + 'of dates and times using the Gregorian calendar.',
    serialize (value) {
        if (value instanceof Date) {
            if ((0, validator_js_1.validateJSDate)(value)) {
                return value;
            }
            throw (0, error_js_1.createGraphQLError)('DateTime cannot represent an invalid Date instance');
        } else if (typeof value === 'string') {
            if ((0, validator_js_1.validateDateTime)(value)) {
                return (0, formatter_js_1.parseDateTime)(value);
            }
            throw (0, error_js_1.createGraphQLError)(`DateTime cannot represent an invalid date-time-string ${value}.`);
        } else if (typeof value === 'number') {
            try {
                return new Date(value);
            } catch (_a) {
                throw (0, error_js_1.createGraphQLError)('DateTime cannot represent an invalid Unix timestamp ' + value);
            }
        } else {
            throw (0, error_js_1.createGraphQLError)('DateTime cannot be serialized from a non string, ' + 'non numeric or non Date type ' + JSON.stringify(value));
        }
    },
    parseValue (value) {
        if (value instanceof Date) {
            if ((0, validator_js_1.validateJSDate)(value)) {
                return value;
            }
            throw (0, error_js_1.createGraphQLError)('DateTime cannot represent an invalid Date instance');
        }
        if (typeof value === 'string') {
            if ((0, validator_js_1.validateDateTime)(value)) {
                return (0, formatter_js_1.parseDateTime)(value);
            }
            throw (0, error_js_1.createGraphQLError)(`DateTime cannot represent an invalid date-time-string ${value}.`);
        }
        throw (0, error_js_1.createGraphQLError)(`DateTime cannot represent non string or Date type ${JSON.stringify(value)}`);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`DateTime cannot represent non string or Date type ${'value' in ast && ast.value}`, {
                nodes: ast
            });
        }
        const { value } = ast;
        if ((0, validator_js_1.validateDateTime)(value)) {
            return (0, formatter_js_1.parseDateTime)(value);
        }
        throw (0, error_js_1.createGraphQLError)(`DateTime cannot represent an invalid date-time-string ${String(value)}.`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'Date | string',
        jsonSchema: {
            type: 'string',
            format: 'date-time'
        }
    }
};
/**
 * An RFC 3339 compliant date-time scalar.
 *
 * Input:
 *    This scalar takes an RFC 3339 date-time string as input and
 *    parses it to a javascript Date.
 *
 * Output:
 *    This scalar serializes javascript Dates,
 *    RFC 3339 date-time strings and unix timestamps
 *    to RFC 3339 UTC date-time strings.
 */ exports.GraphQLDateTime = new graphql_1.GraphQLScalarType(exports.GraphQLDateTimeConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/DateTimeISO.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDateTimeISO = exports.GraphQLDateTimeISOConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const DateTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/DateTime.js [app-route] (ecmascript)");
exports.GraphQLDateTimeISOConfig = {
    ...DateTime_js_1.GraphQLDateTimeConfig,
    name: 'DateTimeISO',
    description: 'A date-time string at UTC, such as 2007-12-03T10:15:30Z, ' + 'compliant with the `date-time` format outlined in section 5.6 of ' + 'the RFC 3339 profile of the ISO 8601 standard for representation ' + 'of dates and times using the Gregorian calendar.' + 'This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format.',
    serialize (value) {
        const date = DateTime_js_1.GraphQLDateTimeConfig.serialize(value);
        return date.toISOString();
    }
};
exports.GraphQLDateTimeISO = new graphql_1.GraphQLScalarType(exports.GraphQLDateTimeISOConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Duration.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDuration = exports.GraphQLISO8601Duration = exports.GraphQLDurationConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// original implementation
// https://stackoverflow.com/questions/32044846/regex-for-iso-8601-durations
// const ISO_DURATION_NEGATIVE_ALLOWED = /^-?P(?!$)(-?\d+(?:\.\d+)?Y)?(-?\d+(?:\.\d+)?M)?(-?\d+(?:\.\d+)?W)?(-?\d+(?:\.\d+)?D)?(T(?=-?\d)(-?\d+(?:\.\d+)?H)?(-?\d+(?:\.\d+)?M)?(-?\d+(?:\.\d+)?S)?)?$/
// const ISO_DURATION_WITHOUT_SIGN = /^P(?!$)(\d+(?:\.\d+)?Y)?(\d+(?:\.\d+)?M)?(\d+(?:\.\d+)?W)?(\d+(?:\.\d+)?D)?(T(?=\d)(\d+(?:\.\d+)?H)?(\d+(?:\.\d+)?M)?(\d+(?:\.\d+)?S)?)?$/
// negative and positive durations allowed, commas and decimal points valid for fractions
const ISO_DURATION = /^(-|\+)?P(?!$)((-|\+)?\d+(?:(\.|,)\d+)?Y)?((-|\+)?\d+(?:(\.|,)\d+)?M)?((-|\+)?\d+(?:(\.|,)\d+)?W)?((-|\+)?\d+(?:(\.|,)\d+)?D)?(T(?=(-|\+)?\d)((-|\+)?\d+(?:(\.|,)\d+)?H)?((-|\+)?\d+(?:(\.|,)\d+)?M)?((-|\+)?\d+(?:(\.|,)\d+)?S)?)?$/;
exports.GraphQLDurationConfig = {
    name: 'Duration',
    description: `
    A string representing a duration conforming to the ISO8601 standard,
    such as: P1W1DT13H23M34S
    P is the duration designator (for period) placed at the start of the duration representation.
    Y is the year designator that follows the value for the number of years.
    M is the month designator that follows the value for the number of months.
    W is the week designator that follows the value for the number of weeks.
    D is the day designator that follows the value for the number of days.
    T is the time designator that precedes the time components of the representation.
    H is the hour designator that follows the value for the number of hours.
    M is the minute designator that follows the value for the number of minutes.
    S is the second designator that follows the value for the number of seconds.

    Note the time designator, T, that precedes the time value.

    Matches moment.js, Luxon and DateFns implementations
    ,/. is valid for decimal places and +/- is a valid prefix
  `,
    serialize (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!ISO_DURATION.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid ISO Duration: ${value}`);
        }
        return value;
    },
    parseValue (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!ISO_DURATION.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid ISO Duration: ${value}`);
        }
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as ISO Durations but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (!ISO_DURATION.test(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid ISO Duration: ${ast.value}`, {
                nodes: ast
            });
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Duration',
            type: 'string',
            pattern: ISO_DURATION.source
        }
    }
};
exports.GraphQLISO8601Duration = new graphql_1.GraphQLScalarType({
    ...exports.GraphQLDurationConfig,
    name: 'ISO8601Duration'
});
exports.GraphQLDuration = new graphql_1.GraphQLScalarType({
    ...exports.GraphQLDurationConfig,
    name: 'Duration'
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Timestamp.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLTimestamp = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
// Taken from https://gist.github.com/langpavel/b30f3d507a47713b0c6e89016e4e9eb7
function serializeDate(value) {
    if (value instanceof Date) {
        return value.getTime();
    } else if (typeof value === 'number') {
        return Math.trunc(value);
    } else if (typeof value === 'string') {
        return Date.parse(value);
    }
    return null;
}
function parseDate(value) {
    if (value === null) {
        return null;
    }
    try {
        return new Date(value);
    } catch (_a) {
        return null;
    }
}
function parseDateFromLiteral(ast) {
    if (ast.kind === graphql_1.Kind.INT) {
        const num = parseInt(ast.value, 10);
        return new Date(num);
    } else if (ast.kind === graphql_1.Kind.STRING) {
        return parseDate(ast.value);
    }
    return null;
}
exports.GraphQLTimestamp = new graphql_1.GraphQLScalarType({
    name: 'Timestamp',
    description: 'The javascript `Date` as integer. Type represents date and time ' + 'as number of milliseconds from start of UNIX epoch.',
    serialize: serializeDate,
    parseValue: parseDate,
    parseLiteral: parseDateFromLiteral,
    extensions: {
        codegenScalarType: 'Date | string | number',
        jsonSchema: {
            type: 'string',
            format: 'unix-time'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/TimeZone.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLTimeZone = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const validateTimeZone = (str, ast)=>{
    if (!(Intl === null || Intl === void 0 ? void 0 : Intl.DateTimeFormat().resolvedOptions().timeZone)) {
        throw (0, error_js_1.createGraphQLError)('Time zones are not available in this environment', ast ? {
            nodes: ast
        } : undefined);
    }
    try {
        Intl.DateTimeFormat(undefined, {
            timeZone: str
        });
        return str;
    } catch (ex) {
        if (ex instanceof RangeError) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid IANA time zone: ${str}`, ast ? {
                nodes: ast
            } : undefined);
        } else {
            throw (0, error_js_1.createGraphQLError)('Could not validate time zone.', ast ? {
                nodes: ast
            } : undefined);
        }
    }
};
exports.GraphQLTimeZone = new graphql_1.GraphQLScalarType({
    name: 'TimeZone',
    description: 'A field whose value exists in the standard IANA Time Zone Database: https://www.iana.org/time-zones',
    serialize: validateTimeZone,
    parseValue: validateTimeZone,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only sanitize time zone strings, but got: ${ast.kind}`);
        }
        return validateTimeZone(ast.value);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'TimeZone',
            type: 'string',
            pattern: '^(?:[A-Za-z0-9_]|(?:%[0-9A-Fa-f]{2}))+'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UtcOffset.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLUtcOffset = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const UTC_OFFSET_REGEX = /^([+-]?)(\d{2}):(\d{2})$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!UTC_OFFSET_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid UTC Offset: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLUtcOffset = new graphql_1.GraphQLScalarType({
    name: 'UtcOffset',
    description: 'A field whose value is a UTC Offset: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as UTC Offset but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'UtcOffset',
            type: 'string',
            pattern: UTC_OFFSET_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalDate.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLocalDate = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const LOCAL_DATE_FORMAT = /^\d{4}-\d{2}-\d{2}$/;
function validateLocalDate(value, ast) {
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    // check that it's in the `yyyy-MM-dd` format
    const isValidFormat = LOCAL_DATE_FORMAT.test(value);
    if (!isValidFormat) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LocalDate: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    // check that it appears to be a valid date, e.g., not something like `2020-13-46`
    const valueAsDate = new Date(value);
    const isValidDate = !isNaN(valueAsDate.getTime());
    if (!isValidDate) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LocalDate: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    // some additional logic to catch invalid dates like `2020-02-30`
    // that we catch by serializing the Date object into an ISO string and checking that our serialized date matches
    // the original value
    const isCalendarDate = valueAsDate.toISOString() === `${value}T00:00:00.000Z`;
    if (!isCalendarDate) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LocalDate: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
}
exports.GraphQLLocalDate = new graphql_1.GraphQLScalarType({
    name: 'LocalDate',
    description: 'A local date string (i.e., with no associated timezone) in `YYYY-MM-DD` format, e.g. `2020-01-01`.',
    serialize (value) {
        // value sent to client as string
        return validateLocalDate(value);
    },
    parseValue (value) {
        // value from client as json
        return validateLocalDate(value);
    },
    parseLiteral (ast) {
        // value from client in ast
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as local dates but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validateLocalDate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'LocalDate',
            type: 'string',
            pattern: LOCAL_DATE_FORMAT.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalTime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLocalTime = exports.LOCAL_TIME_FORMAT = void 0;
exports.validateLocalTime = validateLocalTime;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// 24-hour time with optional seconds and milliseconds - `HH:mm[:ss[.SSS]]`
exports.LOCAL_TIME_FORMAT = /^([0-1][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9](\.\d{3})?)?$/;
function validateLocalTime(value, ast) {
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    const isValidFormat = exports.LOCAL_TIME_FORMAT.test(value);
    if (!isValidFormat) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LocalTime: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
}
exports.GraphQLLocalTime = new graphql_1.GraphQLScalarType({
    name: 'LocalTime',
    description: 'A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.',
    serialize (value) {
        // value sent to client as string
        return validateLocalTime(value);
    },
    parseValue (value) {
        // value from client as json
        return validateLocalTime(value);
    },
    parseLiteral (ast) {
        // value from client in ast
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as local times but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validateLocalTime(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'LocalTime',
            type: 'string',
            pattern: exports.LOCAL_TIME_FORMAT.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalDateTime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLocalDateTime = exports.LocalDateTimeConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const LOCAL_DATE_TIME_REGEX = /^((?:(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}(?:\.\d+)?))(Z|[\+-]\d{2}:\d{2})?)$/;
function validateLocalDateTime(value, ast) {
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: [
                ast
            ]
        } : undefined);
    }
    if (!LOCAL_DATE_TIME_REGEX.test(value.toUpperCase())) {
        throw (0, error_js_1.createGraphQLError)(`LocalDateTime cannot represent an invalid local date-time-string ${value}.`, ast ? {
            nodes: [
                ast
            ]
        } : undefined);
    }
    const valueAsDate = new Date(value);
    const isValidDate = !isNaN(valueAsDate.getTime());
    if (!isValidDate) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LocalDateTime: ${value}`, ast ? {
            nodes: [
                ast
            ]
        } : undefined);
    }
    return value;
}
exports.LocalDateTimeConfig = {
    name: 'LocalDateTime',
    description: 'A local date-time string (i.e., with no associated timezone) in `YYYY-MM-DDTHH:mm:ss` format, e.g. `2020-01-01T00:00:00`.',
    serialize (value) {
        return validateLocalDateTime(value);
    },
    parseValue (value) {
        return validateLocalDateTime(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as local date-times but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validateLocalDateTime(ast.value, ast);
    },
    extensions: {
        codegenScalarType: // eslint-disable-next-line no-template-curly-in-string
        '`${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}`',
        jsonSchema: {
            title: 'LocalDateTime',
            type: 'string',
            format: 'date-time'
        }
    }
};
exports.GraphQLLocalDateTime = new graphql_1.GraphQLScalarType(exports.LocalDateTimeConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalEndTime.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLocalEndTime = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const LocalTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalTime.js [app-route] (ecmascript)");
const LOCAL_END_TIMES = [
    '24:00',
    '24:00:00',
    '24:00:00.000'
];
function validateLocalEndTime(value) {
    // first check if it's any of the special "end time" values
    if (LOCAL_END_TIMES.indexOf(value) >= 0) {
        return value;
    }
    // otherwise, fall back on the standard LocalTime validation
    return (0, LocalTime_js_1.validateLocalTime)(value);
}
exports.GraphQLLocalEndTime = new graphql_1.GraphQLScalarType({
    name: 'LocalEndTime',
    description: 'A local time string (i.e., with no associated timezone) in 24-hr `HH:mm[:ss[.SSS]]` format, e.g. `14:25` or `14:25:06` or `14:25:06.123`.  This scalar is very similar to the `LocalTime`, with the only difference being that `LocalEndTime` also allows `24:00` as a valid value to indicate midnight of the following day.  This is useful when using the scalar to represent the exclusive upper bound of a time block.',
    serialize (value) {
        // value sent to client as string
        return validateLocalEndTime(value);
    },
    parseValue (value) {
        // value from client as json
        return validateLocalEndTime(value);
    },
    parseLiteral (ast) {
        // value from client in ast
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as local times but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validateLocalEndTime(ast.value);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'LocalEndTime',
            type: 'string',
            oneOf: [
                {
                    type: 'string',
                    pattern: LocalTime_js_1.LOCAL_TIME_FORMAT.source
                },
                {
                    type: 'string',
                    enum: LOCAL_END_TIMES
                }
            ]
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/EmailAddress.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLEmailAddress = exports.GraphQLEmailAddressConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    const EMAIL_ADDRESS_REGEX = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, {
            nodes: ast
        });
    }
    if (!EMAIL_ADDRESS_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid email address: ${value}`, {
            nodes: ast
        });
    }
    return value;
};
const specifiedByURL = 'https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address';
exports.GraphQLEmailAddressConfig = {
    name: 'EmailAddress',
    description: 'A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address.',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as email addresses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            type: 'string',
            format: 'email'
        }
    }
};
exports.GraphQLEmailAddress = new graphql_1.GraphQLScalarType(exports.GraphQLEmailAddressConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.processValue = processValue;
exports.isDecimal = isDecimal;
exports.isSexagesimal = isSexagesimal;
exports.sexagesimalToDecimal = sexagesimalToDecimal;
exports.isObjectLike = isObjectLike;
exports.serializeObject = serializeObject;
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
var VALUE_RANGES;
(function(VALUE_RANGES) {
    VALUE_RANGES[VALUE_RANGES["NEGATIVE"] = 0] = "NEGATIVE";
    VALUE_RANGES[VALUE_RANGES["NON_NEGATIVE"] = 1] = "NON_NEGATIVE";
    VALUE_RANGES[VALUE_RANGES["POSITIVE"] = 2] = "POSITIVE";
    VALUE_RANGES[VALUE_RANGES["NON_POSITIVE"] = 3] = "NON_POSITIVE";
})(VALUE_RANGES || (VALUE_RANGES = {}));
var VALUE_TYPES;
(function(VALUE_TYPES) {
    VALUE_TYPES[VALUE_TYPES["INT"] = 0] = "INT";
    VALUE_TYPES[VALUE_TYPES["FLOAT"] = 1] = "FLOAT";
})(VALUE_TYPES || (VALUE_TYPES = {}));
// More info about Sexagesimal: https://en.wikipedia.org/wiki/Sexagesimal
const SEXAGESIMAL_REGEX = /^([0-9]{1,3})°\s*([0-9]{1,3}(?:\.(?:[0-9]{1,}))?)['′]\s*(([0-9]{1,3}(\.([0-9]{1,}))?)["″]\s*)?([NEOSW]?)$/;
// TODO: Consider implementing coercion like this...
// See: https://github.com/graphql/graphql-js/blob/master/src/type/scalars.js#L13
// See: https://github.com/graphql/graphql-js/blob/master/src/type/scalars.js#L60
function _validateInt(value) {
    if (!Number.isFinite(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a finite number: ${value}`);
    }
    if (!Number.isInteger(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not an integer: ${value}`);
    }
    if (!Number.isSafeInteger(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a safe integer: ${value}`);
    }
}
function _validateFloat(value) {
    if (!Number.isFinite(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a finite number: ${value}`);
    }
}
const VALIDATIONS = {
    NonPositiveInt: {
        range: VALUE_RANGES.NON_POSITIVE,
        type: VALUE_TYPES.INT
    },
    PositiveInt: {
        range: VALUE_RANGES.POSITIVE,
        type: VALUE_TYPES.INT
    },
    NonNegativeInt: {
        range: VALUE_RANGES.NON_NEGATIVE,
        type: VALUE_TYPES.INT
    },
    NegativeInt: {
        range: VALUE_RANGES.NEGATIVE,
        type: VALUE_TYPES.INT
    },
    NonPositiveFloat: {
        range: VALUE_RANGES.NON_POSITIVE,
        type: VALUE_TYPES.FLOAT
    },
    PositiveFloat: {
        range: VALUE_RANGES.POSITIVE,
        type: VALUE_TYPES.FLOAT
    },
    NonNegativeFloat: {
        range: VALUE_RANGES.NON_NEGATIVE,
        type: VALUE_TYPES.FLOAT
    },
    NegativeFloat: {
        range: VALUE_RANGES.NEGATIVE,
        type: VALUE_TYPES.FLOAT
    }
};
function processValue(value, scalarName) {
    const { range, type } = VALIDATIONS[scalarName];
    /* eslint-disable no-restricted-globals */ /* eslint-disable use-isnan */ if (value === null || typeof value === 'undefined' || isNaN(value) || Number.isNaN(value) || value === Number.NaN) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a number: ${value}`);
    }
    /* eslint-enable */ let parsedValue;
    switch(type){
        case VALUE_TYPES.FLOAT:
            parsedValue = parseFloat(value);
            _validateFloat(parsedValue);
            break;
        case VALUE_TYPES.INT:
            parsedValue = parseInt(value, 10);
            _validateInt(parsedValue);
            break;
        default:
    }
    if (range === VALUE_RANGES.NEGATIVE && !(parsedValue < 0) || range === VALUE_RANGES.NON_NEGATIVE && !(parsedValue >= 0) || range === VALUE_RANGES.POSITIVE && !(parsedValue > 0) || range === VALUE_RANGES.NON_POSITIVE && !(parsedValue <= 0)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a ${VALUE_RANGES[range].toLowerCase().replace('_', '-')} number: ${value}`);
    }
    return parsedValue;
}
/**
 * Check if the value is in decimal format.
 *
 * @param value - Value to check
 * @returns True if is decimal, false otherwise
 */ function isDecimal(value) {
    const checkedValue = value.toString().trim();
    if (Number.isNaN(Number.parseFloat(checkedValue))) {
        return false;
    }
    return Number.parseFloat(checkedValue) === Number(checkedValue);
}
/**
 * Check if the value is in sexagesimal format.
 *
 * @param value - Value to check
 * @returns True if sexagesimal, false otherwise
 */ function isSexagesimal(value) {
    if (typeof value !== 'string') return false;
    return SEXAGESIMAL_REGEX.test(value.toString().trim());
}
/**
 * Converts a sexagesimal coordinate to decimal format.
 *
 * @param value - Value to convert
 * @returns Decimal coordinate
 * @throws {TypeError} if the value is not in sexagesimal format
 */ function sexagesimalToDecimal(value) {
    const data = SEXAGESIMAL_REGEX.exec(value);
    if (typeof data === 'undefined' || data === null) {
        throw (0, error_js_1.createGraphQLError)(`Value is not in sexagesimal format: ${value}`);
    }
    const min = Number(data[2]) / 60 || 0;
    const sec = Number(data[4]) / 3600 || 0;
    const decimal = Number.parseFloat(data[1]) + min + sec;
    // Southern and western coordinates must be negative decimals
    return [
        'S',
        'W'
    ].includes(data[7]) ? -decimal : decimal;
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
// Taken from https://github.com/graphql/graphql-js/blob/30b446938a9b5afeb25c642d8af1ea33f6c849f3/src/type/scalars.ts#L267
// Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).
function serializeObject(outputValue) {
    if (isObjectLike(outputValue)) {
        if (typeof outputValue.valueOf === 'function') {
            const valueOfResult = outputValue.valueOf();
            if (!isObjectLike(valueOfResult)) {
                return valueOfResult;
            }
        }
        if (typeof outputValue.toJSON === 'function') {
            return outputValue.toJSON();
        }
    }
    return outputValue;
}
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NegativeFloat.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNegativeFloat = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNegativeFloat = new graphql_1.GraphQLScalarType({
    name: 'NegativeFloat',
    description: 'Floats that will have a value less than 0.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NegativeFloat');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NegativeFloat');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floating point numbers as negative floating point numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NegativeFloat');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NegativeFloat',
            type: 'number',
            maximum: 0
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NegativeInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNegativeInt = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNegativeInt = new graphql_1.GraphQLScalarType({
    name: 'NegativeInt',
    description: 'Integers that will have a value less than 0.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NegativeInt');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NegativeInt');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate integers as negative integers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NegativeInt');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NegativeInt',
            type: 'integer',
            maximum: 0
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonEmptyString.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNonEmptyString = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not a string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!value.trim().length) {
        throw (0, error_js_1.createGraphQLError)(`Value cannot be an empty string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLNonEmptyString = new graphql_1.GraphQLScalarType({
    name: 'NonEmptyString',
    description: 'A string that cannot be passed as an empty value',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'NonEmptyString',
            type: 'string',
            minLength: 1
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeFloat.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNonNegativeFloat = exports.GraphQLNonNegativeFloatConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNonNegativeFloatConfig = {
    name: 'NonNegativeFloat',
    description: 'Floats that will have a value of 0 or more.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NonNegativeFloat');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NonNegativeFloat');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floating point numbers as non-negative floating point numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NonNegativeFloat');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NonNegativeFloat',
            type: 'number',
            minimum: 0
        }
    }
};
exports.GraphQLNonNegativeFloat = new graphql_1.GraphQLScalarType(exports.GraphQLNonNegativeFloatConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNonNegativeInt = exports.GraphQLNonNegativeIntConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNonNegativeIntConfig = {
    name: 'NonNegativeInt',
    description: 'Integers that will have a value of 0 or more.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NonNegativeInt');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NonNegativeInt');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate integers as non-negative integers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NonNegativeInt');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NonNegativeInt',
            type: 'integer',
            minimum: 0
        }
    }
};
exports.GraphQLNonNegativeInt = new graphql_1.GraphQLScalarType(exports.GraphQLNonNegativeIntConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonPositiveFloat.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNonPositiveFloat = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNonPositiveFloat = new graphql_1.GraphQLScalarType({
    name: 'NonPositiveFloat',
    description: 'Floats that will have a value of 0 or less.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NonPositiveFloat');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NonPositiveFloat');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floating point numbers as non-positive floating point numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NonPositiveFloat');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NonPositiveFloat',
            type: 'number',
            maximum: 0
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonPositiveInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLNonPositiveInt = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLNonPositiveInt = new graphql_1.GraphQLScalarType({
    name: 'NonPositiveInt',
    description: 'Integers that will have a value of 0 or less.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'NonPositiveInt');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'NonPositiveInt');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate integers as non-positive integers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'NonPositiveInt');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'NonPositiveInt',
            type: 'integer',
            maximum: 0
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PhoneNumber.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLPhoneNumber = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// The regex supports all phone numbers compliant with the E.164 international format standard,
// which includes country codes (Optional), area codes, and local numbers and extension (optional). For more information on E.164 formatting,
// Regex: https://regex101.com/r/nol2F6/1
// Ex. +62 (21) 9175 5194, 2191755194, +1 123-456-7890 12345, +1 (123) 456-7890
const PHONE_NUMBER_REGEX = /^\+?\d{1,3}(\-|\x20)?\(?\d+\)?((\-|\x20)?\d+)+$/;
exports.GraphQLPhoneNumber = new graphql_1.GraphQLScalarType({
    name: 'PhoneNumber',
    description: 'A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.',
    serialize (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!PHONE_NUMBER_REGEX.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Invalid phone number: ${value}. Please ensure it's in a valid format. The country code is optional, and Spaces and dashes are allowed. Examples: +1 (123) 456-7890, +44 (20) 2121 2222, or 123 456-7890.`);
        }
        return value;
    },
    parseValue (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!PHONE_NUMBER_REGEX.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Invalid phone number: ${value}. Please ensure it's in a valid format. The country code is optional, and Spaces and dashes are allowed. Examples: +1 (123) 456-7890, +44 (20) 2121 2222, or 123 456-7890.`);
        }
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as phone numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (!PHONE_NUMBER_REGEX.test(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Invalid phone number: ${ast.value}. Please ensure it's in a valid format. The country code is optional, and Spaces and dashes are allowed. Examples: +1 (123) 456-7890, +44 (20) 2121 2222, or 123 456-7890.`, {
                nodes: ast
            });
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'PhoneNumber',
            type: 'string',
            pattern: PHONE_NUMBER_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PositiveFloat.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLPositiveFloat = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLPositiveFloat = new graphql_1.GraphQLScalarType({
    name: 'PositiveFloat',
    description: 'Floats that will have a value greater than 0.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'PositiveFloat');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'PositiveFloat');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floating point numbers as positive floating point numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'PositiveFloat');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'PositiveFloat',
            type: 'number',
            minimum: 0
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PositiveInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLPositiveInt = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
exports.GraphQLPositiveInt = new graphql_1.GraphQLScalarType({
    name: 'PositiveInt',
    description: 'Integers that will have a value greater than 0.',
    serialize (value) {
        return (0, utilities_js_1.processValue)(value, 'PositiveInt');
    },
    parseValue (value) {
        return (0, utilities_js_1.processValue)(value, 'PositiveInt');
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate integers as positive integers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return (0, utilities_js_1.processValue)(ast.value, 'PositiveInt');
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'PositiveInt',
            type: 'integer',
            minimum: 1
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PostalCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLPostalCode = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// We're going to start with a limited set as suggested here:
// http://www.pixelenvision.com/1708/zip-postal-code-validation-regex-php-code-for-12-countries/
// and here:
// https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
//
// Which gives us the following countries:
//
// US - United States
// UK - United Kingdom
// DE - Germany
// CA - Canada
// FR - France
// IT - Italy
// AU - Australia
// NL - Netherlands
// ES - Spain
// DK - Denmark
// SE - Sweden
// BE - Belgium
// IN - India
// AT - Austria
// PT - Portugal
// CH - Switzerland
// LU - Luxembourg
// IR - Iran
// JP - Japan
// UA - Ukraine
//
// This is really a practical decision of weight (of the package) vs. completeness.
//
// In the future we might expand this list and use the more comprehensive list found here:
// http://unicode.org/cldr/trac/browser/tags/release-26-0-1/common/supplemental/postalCodeData.xml
// prettier-ignore
const POSTAL_CODE_REGEXES = [
    /* US */ /*#__PURE__*/ /^\d{5}([-]?\d{4})?$/,
    /* UK */ /*#__PURE__*/ /^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2})$/,
    /* DE */ /*#__PURE__*/ /\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/,
    /* CA */ /*#__PURE__*/ /^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]) {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/,
    /* FR */ /*#__PURE__*/ /^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/,
    /* IT */ /*#__PURE__*/ /^(V-|I-)?[0-9]{5}$/,
    /* AU */ /*#__PURE__*/ /^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/,
    /* NL */ /*#__PURE__*/ /^[1-9][0-9]{3}\s?([a-zA-Z]{2})?$/,
    /* ES */ /*#__PURE__*/ /^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/,
    /* DK */ /*#__PURE__*/ /^([D|d][K|k]( |-))?[1-9]{1}[0-9]{3}$/,
    /* SE */ /*#__PURE__*/ /^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/,
    /* BE */ /*#__PURE__*/ /^[1-9]{1}[0-9]{3}$/,
    /* IN */ /*#__PURE__*/ /^\d{6}$/,
    /* AT */ /*#__PURE__*/ /^\d{4}$/,
    /* PT */ /*#__PURE__*/ /^\d{4}([\-]\d{3})?$/,
    /* CH */ /*#__PURE__*/ /^\d{4}$/,
    /* LU */ /*#__PURE__*/ /^\d{4}$/,
    /* IR */ /*#__PURE__*/ /^[1,3-9]{10}$/,
    /* JP */ /*#__PURE__*/ /^\d{3}-\d{4}$/,
    /* UA */ /*#__PURE__*/ /^\d{5}$/
];
function _testPostalCode(postalCode) {
    let result = false;
    // eslint-disable-next-line no-plusplus
    for(let i = 0; i < POSTAL_CODE_REGEXES.length; i++){
        const regex = POSTAL_CODE_REGEXES[i];
        if (regex.test(postalCode)) {
            result = true;
            break;
        }
    }
    return result;
}
exports.GraphQLPostalCode = new graphql_1.GraphQLScalarType({
    name: 'PostalCode',
    description: 'A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium, India, Austria, Portugal, Switzerland or Luxembourg.',
    serialize (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!_testPostalCode(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid postal code: ${value}`);
        }
        return value;
    },
    parseValue (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!_testPostalCode(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid postal code: ${value}`);
        }
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as postal codes but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (!_testPostalCode(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid postal code: ${ast.value}`, {
                nodes: ast
            });
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'PostalCode',
            oneOf: POSTAL_CODE_REGEXES.map((regex)=>({
                    type: 'string',
                    pattern: regex.source
                }))
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UnsignedFloat.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLUnsignedFloat = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const NonNegativeFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeFloat.js [app-route] (ecmascript)");
const GraphQLUnsignedFloatConfig = /*#__PURE__*/ Object.assign({}, NonNegativeFloat_js_1.GraphQLNonNegativeFloatConfig, {
    name: 'UnsignedFloat'
});
exports.GraphQLUnsignedFloat = new graphql_1.GraphQLScalarType(GraphQLUnsignedFloatConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UnsignedInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLUnsignedInt = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const NonNegativeInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeInt.js [app-route] (ecmascript)");
const GraphQLUnsignedIntConfig = /*#__PURE__*/ Object.assign({}, NonNegativeInt_js_1.GraphQLNonNegativeIntConfig, {
    name: 'UnsignedInt'
});
exports.GraphQLUnsignedInt = new graphql_1.GraphQLScalarType(GraphQLUnsignedIntConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/URL.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLURL = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
exports.GraphQLURL = new graphql_1.GraphQLScalarType({
    name: 'URL',
    description: 'A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.',
    serialize (value) {
        if (value === null) {
            return value;
        }
        return new URL(value.toString()).toString();
    },
    parseValue: (value)=>value === null ? value : new URL(value.toString()),
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as URLs but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (ast.value === null) {
            return ast.value;
        } else {
            return new URL(ast.value.toString());
        }
    },
    extensions: {
        codegenScalarType: 'URL | string',
        jsonSchema: {
            type: 'string',
            format: 'uri'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/BigInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLBigInt = exports.GraphQLBigIntConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
let warned = false;
function isSafeInteger(val) {
    return val <= Number.MAX_SAFE_INTEGER && val >= Number.MIN_SAFE_INTEGER;
}
function serializeSafeBigInt(val) {
    if (isSafeInteger(val)) {
        return Number(val);
    }
    if (isBigIntSerializable()) {
        return val;
    }
    return val.toString();
}
function isBigIntSerializable() {
    if (!('toJSON' in BigInt.prototype)) {
        if (!warned) {
            warned = true;
            console.warn('By default, BigInts are not serialized to JSON as numbers but instead as strings which may lead an unintegrity in your data. ' + 'To fix this, you can use "json-bigint-patch" to enable correct serialization for BigInts.');
        }
        return false;
    }
    return true;
}
exports.GraphQLBigIntConfig = {
    name: 'BigInt',
    description: 'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
    serialize (outputValue) {
        const coercedValue = (0, utilities_js_1.serializeObject)(outputValue);
        let num = coercedValue;
        if (typeof coercedValue === 'object' && coercedValue != null && 'toString' in coercedValue) {
            num = BigInt(coercedValue.toString());
            if (num.toString() !== coercedValue.toString()) {
                throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent non-integer value: ${coercedValue}`);
            }
        }
        if (typeof coercedValue === 'boolean') {
            num = BigInt(coercedValue);
        }
        if (typeof coercedValue === 'string' && coercedValue !== '') {
            num = BigInt(coercedValue);
            if (num.toString() !== coercedValue) {
                throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent non-integer value: ${coercedValue}`);
            }
        }
        if (typeof coercedValue === 'number') {
            if (!Number.isInteger(coercedValue)) {
                throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent non-integer value: ${coercedValue}`);
            }
            num = BigInt(coercedValue);
        }
        if (typeof num !== 'bigint') {
            throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent non-integer value: ${coercedValue}`);
        }
        return serializeSafeBigInt(num);
    },
    parseValue (inputValue) {
        const bigint = BigInt(inputValue.toString());
        if (inputValue.toString() !== bigint.toString()) {
            throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent value: ${inputValue}`);
        }
        if (isSafeInteger(bigint) && !isBigIntSerializable()) {
            return Number(bigint.toString());
        }
        return bigint;
    },
    parseLiteral (valueNode) {
        if (!('value' in valueNode)) {
            throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent non-integer value: ${(0, graphql_1.print)(valueNode)}`, {
                nodes: valueNode
            });
        }
        const strOrBooleanValue = valueNode.value;
        const bigint = BigInt(strOrBooleanValue);
        if (strOrBooleanValue.toString() !== bigint.toString()) {
            throw (0, error_js_1.createGraphQLError)(`BigInt cannot represent value: ${strOrBooleanValue}`);
        }
        if (isSafeInteger(bigint) && !isBigIntSerializable()) {
            return Number(bigint.toString());
        }
        return bigint;
    },
    extensions: {
        codegenScalarType: 'bigint',
        jsonSchema: {
            type: 'integer',
            format: 'int64'
        }
    }
};
exports.GraphQLBigInt = new graphql_1.GraphQLScalarType(exports.GraphQLBigIntConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Byte.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLByte = exports.GraphQLByteConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const base64Validator = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;
function hexValidator(value) {
    // Ensure that any leading 0 is removed from the hex string to avoid false negatives.
    const sanitizedValue = value.charAt(0) === '0' ? value.slice(1) : value;
    // For larger strings, we run into issues with MAX_SAFE_INTEGER, so split the string
    // into smaller pieces to avoid this issue.
    if (value.length > 8) {
        let parsedString = '';
        for(let startIndex = 0, endIndex = 8; startIndex < value.length; startIndex += 8, endIndex += 8){
            parsedString += parseInt(value.slice(startIndex, endIndex), 16).toString(16);
        }
        return parsedString === sanitizedValue;
    }
    return parseInt(value, 16).toString(16) === sanitizedValue;
}
function validate(value, ast) {
    if (typeof value !== 'string' && !(value instanceof /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not an instance of Buffer: ${JSON.stringify(value)}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (typeof value === 'string') {
        const isBase64 = base64Validator.test(value);
        const isHex = hexValidator(value);
        if (!isBase64 && !isHex) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid base64 or hex encoded string: ${JSON.stringify(value)}`, ast ? {
                nodes: ast
            } : undefined);
        }
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer.from(value, isHex ? 'hex' : 'base64');
    }
    return value;
}
function parseObject(ast) {
    const key = ast.fields[0].value;
    const value = ast.fields[1].value;
    if (ast.fields.length === 2 && key.kind === graphql_1.Kind.STRING && key.value === 'Buffer' && value.kind === graphql_1.Kind.LIST) {
        return /*TURBOPACK member replacement*/ __turbopack_context__.g.Buffer.from(value.values.map((astValue)=>parseInt(astValue.value)));
    }
    throw (0, error_js_1.createGraphQLError)(`Value is not a JSON representation of Buffer: ${(0, graphql_1.print)(ast)}`, {
        nodes: [
            ast
        ]
    });
}
exports.GraphQLByteConfig = /*#__PURE__*/ {
    name: 'Byte',
    description: 'The `Byte` scalar type represents byte value as a Buffer',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        switch(ast.kind){
            case graphql_1.Kind.STRING:
                return validate(ast.value, ast);
            case graphql_1.Kind.OBJECT:
                return parseObject(ast);
            default:
                throw (0, error_js_1.createGraphQLError)(`Can only parse base64 or hex encoded strings as Byte, but got a: ${ast.kind}`, {
                    nodes: [
                        ast
                    ]
                });
        }
    },
    extensions: {
        codegenScalarType: 'Buffer | string',
        jsonSchema: {
            type: 'string',
            format: 'byte'
        }
    }
};
exports.GraphQLByte = new graphql_1.GraphQLScalarType(exports.GraphQLByteConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Long.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLong = exports.GraphQLLongConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const BigInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/BigInt.js [app-route] (ecmascript)");
exports.GraphQLLongConfig = Object.assign({}, BigInt_js_1.GraphQLBigIntConfig, {
    name: 'Long'
});
exports.GraphQLLong = new graphql_1.GraphQLScalarType(exports.GraphQLLongConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/SafeInt.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLSafeInt = exports.GraphQLSafeIntConfig = void 0;
// Based on https://github.com/stems/graphql-bigint/
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
const specifiedByURL = 'https://www.ecma-international.org/ecma-262/#sec-number.issafeinteger';
exports.GraphQLSafeIntConfig = {
    name: 'SafeInt',
    description: 'The `SafeInt` scalar type represents non-fractional signed whole numeric values that are ' + 'considered safe as defined by the ECMAScript specification.',
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    serialize (outputValue) {
        const coercedValue = (0, utilities_js_1.serializeObject)(outputValue);
        if (typeof coercedValue === 'boolean') {
            return coercedValue ? 1 : 0;
        }
        let num = coercedValue;
        if (typeof coercedValue === 'string' && coercedValue !== '') {
            num = Number(coercedValue);
        }
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw (0, error_js_1.createGraphQLError)(`SafeInt cannot represent non-integer value: ${coercedValue}`);
        }
        if (!Number.isSafeInteger(num)) {
            throw (0, error_js_1.createGraphQLError)('SafeInt cannot represent unsafe integer value: ' + coercedValue);
        }
        return num;
    },
    parseValue (inputValue) {
        if (typeof inputValue !== 'number' || !Number.isInteger(inputValue)) {
            throw (0, error_js_1.createGraphQLError)(`SafeInt cannot represent non-integer value: ${inputValue}`);
        }
        if (!Number.isSafeInteger(inputValue)) {
            throw (0, error_js_1.createGraphQLError)(`SafeInt cannot represent unsafe integer value: ${inputValue}`);
        }
        return inputValue;
    },
    parseLiteral (valueNode) {
        if (valueNode.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`SafeInt cannot represent non-integer value: ${(0, graphql_1.print)(valueNode)}`, {
                nodes: valueNode
            });
        }
        const num = parseInt(valueNode.value, 10);
        if (!Number.isSafeInteger(num)) {
            throw (0, error_js_1.createGraphQLError)(`SafeInt cannot represent unsafe integer value: ${valueNode.value}`, {
                nodes: valueNode
            });
        }
        return num;
    },
    extensions: {
        codegenScalarType: 'number',
        jsonSchema: {
            title: 'SafeInt',
            type: 'integer',
            minimum: Number.MIN_SAFE_INTEGER,
            maximum: Number.MAX_SAFE_INTEGER
        }
    }
};
exports.GraphQLSafeInt = new graphql_1.GraphQLScalarType(exports.GraphQLSafeIntConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UUID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLUUID = exports.GraphQLUUIDConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    const UUID_REGEX = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (value.startsWith('{')) {
        value = value.substring(1, value.length - 1);
    }
    if (!UUID_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid UUID: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLUUIDConfig = {
    name: `UUID`,
    description: `A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as UUIDs but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            type: 'string',
            format: 'uuid'
        }
    }
};
exports.GraphQLUUID = new graphql_1.GraphQLScalarType(exports.GraphQLUUIDConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GUID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLGUID = exports.GraphQLGUIDConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const UUID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UUID.js [app-route] (ecmascript)");
exports.GraphQLGUIDConfig = Object.assign({}, UUID_js_1.GraphQLUUIDConfig, {
    name: 'GUID'
});
exports.GraphQLGUID = new graphql_1.GraphQLScalarType(exports.GraphQLGUIDConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Hexadecimal.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLHexadecimal = exports.GraphQLHexadecimalConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const HEXADECIMAL_REGEX = /^[a-f0-9]+$/i;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!HEXADECIMAL_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid hexadecimal value: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLHexadecimalConfig = {
    name: `Hexadecimal`,
    description: `A field whose value is a hexadecimal: https://en.wikipedia.org/wiki/Hexadecimal.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as a hexadecimal but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Hexadecimal',
            type: 'string',
            pattern: HEXADECIMAL_REGEX.source
        }
    }
};
exports.GraphQLHexadecimal = new graphql_1.GraphQLScalarType(exports.GraphQLHexadecimalConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HexColorCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLHexColorCode = exports.GraphQLHexColorCodeConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const HEX_COLOR_CODE = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8})$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!HEX_COLOR_CODE.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid HexColorCode: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://en.wikipedia.org/wiki/Web_colors';
exports.GraphQLHexColorCodeConfig = {
    name: `HexColorCode`,
    description: `A field whose value is a hex color code: https://en.wikipedia.org/wiki/Web_colors.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as hex color codes but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'HexColorCode',
            type: 'string',
            pattern: HEX_COLOR_CODE.source
        }
    }
};
exports.GraphQLHexColorCode = new graphql_1.GraphQLScalarType(exports.GraphQLHexColorCodeConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HSL.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLHSL = exports.GraphQLHSLConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const HSL_REGEX = /^hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!HSL_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid HSL color: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla()';
exports.GraphQLHSLConfig = {
    name: `HSL`,
    description: `A field whose value is a CSS HSL color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as HSL colors but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'HSL',
            type: 'string',
            pattern: HSL_REGEX.source
        }
    }
};
exports.GraphQLHSL = new graphql_1.GraphQLScalarType(exports.GraphQLHSLConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HSLA.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLHSLA = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const HSLA_REGEX = /^hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!HSLA_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid HSLA color: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLHSLA = new graphql_1.GraphQLScalarType({
    name: `HSLA`,
    description: `A field whose value is a CSS HSLA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla().`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as HSLA colors but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'HSLA',
            type: 'string',
            pattern: HSLA_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv4.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLIPv4 = exports.IPV4_REGEX = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
exports.IPV4_REGEX = /^(?:(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(?:\/(?:[0-9]|[1-2][0-9]|3[0-2]))?)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!exports.IPV4_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid IPv4 address: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLIPv4 = new graphql_1.GraphQLScalarType({
    name: `IPv4`,
    description: `A field whose value is a IPv4 address: https://en.wikipedia.org/wiki/IPv4.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as IPv4 addresses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            type: 'string',
            format: 'ipv4'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv6.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLIPv6 = exports.IPV6_REGEX = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
exports.IPV6_REGEX = /^(?:(?:(?:[0-9A-Fa-f]{1,4}:){6}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|::(?:[0-9A-Fa-f]{1,4}:){5}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){4}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){0,1}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){3}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:){2}(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}:(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})?::(?:[0-9A-Fa-f]{1,4}:[0-9A-Fa-f]{1,4}|(?:(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}(?:0?0?[0-9]|0?[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]))|(?:(?:[0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})?::[0-9A-Fa-f]{1,4}|(?:(?:[0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})?::)(?:\/(?:0?0?[0-9]|0?[1-9][0-9]|1[01][0-9]|12[0-8]))?)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!exports.IPV6_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid IPv6 address: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLIPv6 = new graphql_1.GraphQLScalarType({
    name: `IPv6`,
    description: `A field whose value is a IPv6 address: https://en.wikipedia.org/wiki/IPv6.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as IPv6 addresses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            type: 'string',
            format: 'ipv6'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IP.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLIP = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const IPv4_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv4.js [app-route] (ecmascript)");
const IPv6_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv6.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!IPv4_js_1.IPV4_REGEX.test(value) && !IPv6_js_1.IPV6_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid IPv4 or IPv6 address: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLIP = new graphql_1.GraphQLScalarType({
    name: `IP`,
    description: `A field whose value is either an IPv4 or IPv6 address: https://en.wikipedia.org/wiki/IP_address.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as IP addresses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'IP',
            oneOf: [
                {
                    type: 'string',
                    format: 'ipv4'
                },
                {
                    type: 'string',
                    format: 'ipv6'
                }
            ]
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ISBN.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLISBN = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const ISBN_REGEX_ARR = [
    /^(?:ISBN(?:-10)?:? *)?((?=\d{1,5}([ -]?)\d{1,7}\2?\d{1,6}\2?\d)(?:\d\2*){9}[\dX])$/i,
    /^(?:ISBN(?:-13)?:? *)?(97(?:8|9)([ -]?)(?=\d{1,5}\2?\d{1,7}\2?\d{1,6}\2?\d)(?:\d\2*){9}\d)$/i
];
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    let valid = false;
    for (const regex of ISBN_REGEX_ARR){
        if (regex.test(value)) {
            valid = true;
            break;
        }
    }
    if (!valid) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid ISBN number: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLISBN = new graphql_1.GraphQLScalarType({
    name: `ISBN`,
    description: `A field whose value is a ISBN-10 or ISBN-13 number: https://en.wikipedia.org/wiki/International_Standard_Book_Number.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as ISBN numbers but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'ISBN',
            oneOf: ISBN_REGEX_ARR.map((regex)=>({
                    type: 'string',
                    pattern: regex.source
                }))
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/JWT.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLJWT = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// See https://github.com/auth0/node-jws/blob/master/lib/verify-stream.js#L8
const JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!JWS_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid JWT: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLJWT = new graphql_1.GraphQLScalarType({
    name: `JWT`,
    description: `A field whose value is a JSON Web Token (JWT): https://jwt.io/introduction.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as JWT but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'JWT',
            type: 'string',
            pattern: JWS_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Latitude.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLatitude = void 0;
// Inspired by Geolib: https://github.com/manuelbieh/geolib
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
// Minimum latitude
const MIN_LAT = -90.0;
// Maximum latitude
const MAX_LAT = 90.0;
// See https://en.wikipedia.org/wiki/Decimal_degrees#Precision
const MAX_PRECISION = 8;
const validate = (value, ast)=>{
    // Check if value is a string or a number
    if (typeof value !== 'string' && typeof value !== 'number' || value === null || typeof value === 'undefined' || Number.isNaN(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is neither a number nor a string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if ((0, utilities_js_1.isDecimal)(value)) {
        const decimalValue = typeof value === 'string' ? Number.parseFloat(value) : value;
        if (decimalValue < MIN_LAT || decimalValue > MAX_LAT) {
            throw (0, error_js_1.createGraphQLError)(`Value must be between ${MIN_LAT} and ${MAX_LAT}: ${value}`, ast ? {
                nodes: ast
            } : undefined);
        }
        return Number.parseFloat(decimalValue.toFixed(MAX_PRECISION));
    }
    if ((0, utilities_js_1.isSexagesimal)(value)) {
        return validate((0, utilities_js_1.sexagesimalToDecimal)(value));
    }
    throw (0, error_js_1.createGraphQLError)(`Value is not a valid latitude: ${value}`, ast ? {
        nodes: ast
    } : undefined);
};
exports.GraphQLLatitude = new graphql_1.GraphQLScalarType({
    name: `Latitude`,
    description: `A field whose value is a valid decimal degrees latitude number (53.471): https://en.wikipedia.org/wiki/Latitude`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floats or strings as latitude but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string | number',
        jsonSchema: {
            title: 'Latitude',
            type: 'number',
            minimum: MIN_LAT,
            maximum: MAX_LAT
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Longitude.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLongitude = void 0;
// Inspired by Geolib: https://github.com/manuelbieh/geolib
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const utilities_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/utilities.js [app-route] (ecmascript)");
// Minimum longitude
const MIN_LON = -180.0;
// Maximum longitude
const MAX_LON = 180.0;
// See https://en.wikipedia.org/wiki/Decimal_degrees#Precision
const MAX_PRECISION = 8;
const validate = (value, ast)=>{
    // Check if value is a string or a number
    if (typeof value !== 'string' && typeof value !== 'number' || value === null || typeof value === 'undefined' || Number.isNaN(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is neither a number nor a string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if ((0, utilities_js_1.isDecimal)(value)) {
        const decimalValue = typeof value === 'string' ? Number.parseFloat(value) : value;
        if (decimalValue < MIN_LON || decimalValue > MAX_LON) {
            throw (0, error_js_1.createGraphQLError)(`Value must be between ${MIN_LON} and ${MAX_LON}: ${value}`, ast ? {
                nodes: ast
            } : undefined);
        }
        return Number.parseFloat(decimalValue.toFixed(MAX_PRECISION));
    }
    if ((0, utilities_js_1.isSexagesimal)(value)) {
        return validate((0, utilities_js_1.sexagesimalToDecimal)(value));
    }
    throw (0, error_js_1.createGraphQLError)(`Value is not a valid longitude: ${value}`, ast ? {
        nodes: ast
    } : undefined);
};
exports.GraphQLLongitude = new graphql_1.GraphQLScalarType({
    name: `Longitude`,
    description: `A field whose value is a valid decimal degrees longitude number (53.471): https://en.wikipedia.org/wiki/Longitude`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.FLOAT && ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate floats or strings as longitude but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string | number',
        jsonSchema: {
            title: 'Longitude',
            type: 'number',
            minimum: MIN_LON,
            maximum: MAX_LON
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/MAC.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLMAC = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const MAC_REGEX = /^(?:[0-9A-Fa-f]{2}([:-]?)[0-9A-Fa-f]{2})(?:(?:\1|\.)(?:[0-9A-Fa-f]{2}([:-]?)[0-9A-Fa-f]{2})){2}$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!MAC_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid MAC address: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLMAC = new graphql_1.GraphQLScalarType({
    name: `MAC`,
    description: `A field whose value is a IEEE 802 48-bit MAC address: https://en.wikipedia.org/wiki/MAC_address.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as MAC addresses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'MAC',
            type: 'string',
            pattern: MAC_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Port.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLPort = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const validate = (value, ast)=>{
    const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
    if (typeof parsed !== 'number' || Number.isNaN(parsed)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a number: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (parsed === Infinity || parsed === -Infinity) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a finite number: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (parsed <= 0 || parsed > 65535) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid TCP port: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return parsed;
};
exports.GraphQLPort = new graphql_1.GraphQLScalarType({
    name: `Port`,
    description: `A field whose value is a valid TCP port within the range of 0 to 65535: https://en.wikipedia.org/wiki/Transmission_Control_Protocol#TCP_ports`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.INT) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate integers as TCP ports but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string | number',
        jsonSchema: {
            title: 'Port',
            type: 'integer',
            minimum: 0,
            maximum: 65535
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RGB.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLRGB = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const RGB_REGEX = /^rgb\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*\)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!RGB_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid RGB color: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLRGB = new graphql_1.GraphQLScalarType({
    name: `RGB`,
    description: `A field whose value is a CSS RGB color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as RGB colors but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'RGB',
            type: 'string',
            pattern: RGB_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RGBA.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLRGBA = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const RGBA_REGEX = /^rgba\(\s*(-?\d+|-?\d*\.\d+(?=%))(%?)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*\.\d+(?=%))(\2)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!RGBA_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid RGBA color: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLRGBA = new graphql_1.GraphQLScalarType({
    name: `RGBA`,
    description: `A field whose value is a CSS RGBA color: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba().`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as RGBA colors but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'RGBA',
            type: 'string',
            pattern: RGBA_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/USCurrency.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLUSCurrency = void 0;
// https://github.com/abhiaiyer91/graphql-currency-scalars
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
function generateCurrency(value) {
    if (typeof value !== 'number') {
        throw (0, error_js_1.createGraphQLError)(`Currency cannot represent non integer type ${JSON.stringify(value)}`);
    }
    const currencyInCents = parseInt(value.toString(), 10);
    return (currencyInCents / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}
function generateCents(value) {
    const digits = value.replace('$', '').replace(',', '');
    const number = parseFloat(digits);
    return number * 100;
}
/**
 * An Currency Scalar.
 *
 * Input:
 *    This scalar takes a currency string as input and
 *    formats it to currency in cents.
 *
 * Output:
 *    This scalar serializes currency in cents to
 *    currency strings.
 */ exports.GraphQLUSCurrency = new graphql_1.GraphQLScalarType({
    name: 'USCurrency',
    description: 'A currency string, such as $21.25',
    serialize: generateCurrency,
    parseValue (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Currency cannot represent non string type ${JSON.stringify(value)}`);
        }
        return generateCents(value);
    },
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            if (typeof ast.value === 'string') {
                return generateCents(ast.value);
            }
        }
        throw (0, error_js_1.createGraphQLError)(`Currency cannot represent an invalid currency-string ${JSON.stringify(ast)}.`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'USCurrency',
            type: 'string',
            pattern: '^\\$[0-9]+(\\.[0-9]{2})?$'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Currency.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLCurrency = exports.GraphQLCurrencyConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const CURRENCY_REGEX = /^(AED|AFN|ALL|AMD|ANG|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BGN|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HRK|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLL|SLE|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VES|VND|VUV|WST|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XCG|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWG|ZWL)$/i;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!CURRENCY_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid currency value: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://en.wikipedia.org/wiki/ISO_4217';
exports.GraphQLCurrencyConfig = {
    name: `Currency`,
    description: `A field whose value is a Currency: https://en.wikipedia.org/wiki/ISO_4217.`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as a currency but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Currency',
            type: 'string',
            pattern: CURRENCY_REGEX.source
        }
    }
};
exports.GraphQLCurrency = new graphql_1.GraphQLScalarType(exports.GraphQLCurrencyConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/utils.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identity = identity;
exports.ensureObject = ensureObject;
exports.parseObject = parseObject;
exports.parseLiteral = parseLiteral;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
function identity(value) {
    return value;
}
function ensureObject(value, ast) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw (0, error_js_1.createGraphQLError)(`JSONObject cannot represent non-object value: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
}
function parseObject(ast, variables) {
    if (ast.kind !== graphql_1.Kind.OBJECT) {
        throw (0, error_js_1.createGraphQLError)(`JSONObject cannot represent non-object value: ${(0, graphql_1.print)(ast)}`, ast ? {
            nodes: ast
        } : undefined);
    }
    const value = Object.create(null);
    ast.fields.forEach((field)=>{
        // eslint-disable-next-line no-use-before-define
        value[field.name.value] = parseLiteral(field.value, variables);
    });
    return value;
}
function parseLiteral(ast, variables) {
    switch(ast.kind){
        case graphql_1.Kind.STRING:
        case graphql_1.Kind.BOOLEAN:
            return ast.value;
        case graphql_1.Kind.INT:
        case graphql_1.Kind.FLOAT:
            return parseFloat(ast.value);
        case graphql_1.Kind.OBJECT:
            return parseObject(ast, variables);
        case graphql_1.Kind.LIST:
            return ast.values.map((n)=>parseLiteral(n, variables));
        case graphql_1.Kind.NULL:
            return null;
        case graphql_1.Kind.VARIABLE:
            {
                const name = ast.name.value;
                return variables ? variables[name] : undefined;
            }
    }
}
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/JSON.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLJSON = exports.GraphQLJSONConfig = void 0;
// This named export is intended for users of CommonJS. Users of ES modules
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/utils.js [app-route] (ecmascript)");
const specifiedByURL = 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf';
exports.GraphQLJSONConfig = {
    name: 'JSON',
    description: 'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize: utils_js_1.identity,
    parseValue: utils_js_1.identity,
    parseLiteral: utils_js_1.parseLiteral,
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'any'
    }
};
exports.GraphQLJSON = new graphql_1.GraphQLScalarType(exports.GraphQLJSONConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/JSONObject.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLJSONObject = exports.GraphQLJSONObjectConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const utils_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/utils.js [app-route] (ecmascript)");
const specifiedByURL = 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf';
exports.GraphQLJSONObjectConfig = {
    name: 'JSONObject',
    description: 'The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    serialize: utils_js_1.ensureObject,
    parseValue: utils_js_1.ensureObject,
    parseLiteral: utils_js_1.parseObject,
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'Record<string, any>',
        jsonSchema: {
            type: 'object',
            additionalProperties: true
        }
    }
};
exports.GraphQLJSONObject = new graphql_1.GraphQLScalarType(exports.GraphQLJSONObjectConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IBAN.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLIBAN = void 0;
// Based on https://github.com/arhs/iban.js
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
/* These are IBAN the specifications for all countries using IBAN
The key is the countrycode, the second item is the length of the IBAN,
The third item is the structure of the underlying BBAN (for validation and formatting)
*/ const IBAN_SPECIFICATIONS = {
    AD: {
        length: 24,
        structure: 'F04F04A12',
        example: 'AD1200012030200359100100'
    },
    AE: {
        length: 23,
        structure: 'F03F16',
        example: 'AE070331234567890123456'
    },
    AL: {
        length: 28,
        structure: 'F08A16',
        example: 'AL47212110090000000235698741'
    },
    AO: {
        length: 25,
        structure: 'F21',
        example: 'AO69123456789012345678901'
    },
    AT: {
        length: 20,
        structure: 'F05F11',
        example: 'AT611904300234573201'
    },
    AZ: {
        length: 28,
        structure: 'U04A20',
        example: 'AZ21NABZ00000000137010001944'
    },
    BA: {
        length: 20,
        structure: 'F03F03F08F02',
        example: 'BA391290079401028494'
    },
    BE: {
        length: 16,
        structure: 'F03F07F02',
        example: 'BE68539007547034'
    },
    BF: {
        length: 27,
        structure: 'F23',
        example: 'BF2312345678901234567890123'
    },
    BG: {
        length: 22,
        structure: 'U04F04F02A08',
        example: 'BG80BNBG96611020345678'
    },
    BH: {
        length: 22,
        structure: 'U04A14',
        example: 'BH67BMAG00001299123456'
    },
    BI: {
        length: 16,
        structure: 'F12',
        example: 'BI41123456789012'
    },
    BJ: {
        length: 28,
        structure: 'F24',
        example: 'BJ39123456789012345678901234'
    },
    BR: {
        length: 29,
        structure: 'F08F05F10U01A01',
        example: 'BR9700360305000010009795493P1'
    },
    BY: {
        length: 28,
        structure: 'A04F04A16',
        example: 'BY13NBRB3600900000002Z00AB00'
    },
    CH: {
        length: 21,
        structure: 'F05A12',
        example: 'CH9300762011623852957'
    },
    CI: {
        length: 28,
        structure: 'U02F22',
        example: 'CI70CI1234567890123456789012'
    },
    CM: {
        length: 27,
        structure: 'F23',
        example: 'CM9012345678901234567890123'
    },
    CR: {
        length: 22,
        structure: 'F04F14',
        example: 'CR72012300000171549015'
    },
    CV: {
        length: 25,
        structure: 'F21',
        example: 'CV30123456789012345678901'
    },
    CY: {
        length: 28,
        structure: 'F03F05A16',
        example: 'CY17002001280000001200527600'
    },
    CZ: {
        length: 24,
        structure: 'F04F06F10',
        example: 'CZ6508000000192000145399'
    },
    DE: {
        length: 22,
        structure: 'F08F10',
        example: 'DE89370400440532013000'
    },
    DK: {
        length: 18,
        structure: 'F04F09F01',
        example: 'DK5000400440116243'
    },
    DO: {
        length: 28,
        structure: 'U04F20',
        example: 'DO28BAGR00000001212453611324'
    },
    DZ: {
        length: 24,
        structure: 'F20',
        example: 'DZ8612345678901234567890'
    },
    EE: {
        length: 20,
        structure: 'F02F02F11F01',
        example: 'EE382200221020145685'
    },
    ES: {
        length: 24,
        structure: 'F04F04F01F01F10',
        example: 'ES9121000418450200051332'
    },
    FI: {
        length: 18,
        structure: 'F06F07F01',
        example: 'FI2112345600000785'
    },
    FO: {
        length: 18,
        structure: 'F04F09F01',
        example: 'FO6264600001631634'
    },
    FR: {
        length: 27,
        structure: 'F05F05A11F02',
        example: 'FR1420041010050500013M02606'
    },
    GB: {
        length: 22,
        structure: 'U04F06F08',
        example: 'GB29NWBK60161331926819'
    },
    GE: {
        length: 22,
        structure: 'U02F16',
        example: 'GE29NB0000000101904917'
    },
    GI: {
        length: 23,
        structure: 'U04A15',
        example: 'GI75NWBK000000007099453'
    },
    GL: {
        length: 18,
        structure: 'F04F09F01',
        example: 'GL8964710001000206'
    },
    GR: {
        length: 27,
        structure: 'F03F04A16',
        example: 'GR1601101250000000012300695'
    },
    GT: {
        length: 28,
        structure: 'A04A20',
        example: 'GT82TRAJ01020000001210029690'
    },
    HR: {
        length: 21,
        structure: 'F07F10',
        example: 'HR1210010051863000160'
    },
    HU: {
        length: 28,
        structure: 'F03F04F01F15F01',
        example: 'HU42117730161111101800000000'
    },
    IE: {
        length: 22,
        structure: 'U04F06F08',
        example: 'IE29AIBK93115212345678'
    },
    IL: {
        length: 23,
        structure: 'F03F03F13',
        example: 'IL620108000000099999999'
    },
    IS: {
        length: 26,
        structure: 'F04F02F06F10',
        example: 'IS140159260076545510730339'
    },
    IT: {
        length: 27,
        structure: 'U01F05F05A12',
        example: 'IT60X0542811101000000123456'
    },
    IQ: {
        length: 23,
        structure: 'U04F03A12',
        example: 'IQ98NBIQ850123456789012'
    },
    IR: {
        length: 26,
        structure: 'F22',
        example: 'IR861234568790123456789012'
    },
    JO: {
        length: 30,
        structure: 'A04F22',
        example: 'JO15AAAA1234567890123456789012'
    },
    KW: {
        length: 30,
        structure: 'U04A22',
        example: 'KW81CBKU0000000000001234560101'
    },
    KZ: {
        length: 20,
        structure: 'F03A13',
        example: 'KZ86125KZT5004100100'
    },
    LB: {
        length: 28,
        structure: 'F04A20',
        example: 'LB62099900000001001901229114'
    },
    LC: {
        length: 32,
        structure: 'U04F24',
        example: 'LC07HEMM000100010012001200013015'
    },
    LI: {
        length: 21,
        structure: 'F05A12',
        example: 'LI21088100002324013AA'
    },
    LT: {
        length: 20,
        structure: 'F05F11',
        example: 'LT121000011101001000'
    },
    LU: {
        length: 20,
        structure: 'F03A13',
        example: 'LU280019400644750000'
    },
    LV: {
        length: 21,
        structure: 'U04A13',
        example: 'LV80BANK0000435195001'
    },
    MC: {
        length: 27,
        structure: 'F05F05A11F02',
        example: 'MC5811222000010123456789030'
    },
    MD: {
        length: 24,
        structure: 'U02A18',
        example: 'MD24AG000225100013104168'
    },
    ME: {
        length: 22,
        structure: 'F03F13F02',
        example: 'ME25505000012345678951'
    },
    MG: {
        length: 27,
        structure: 'F23',
        example: 'MG1812345678901234567890123'
    },
    MK: {
        length: 19,
        structure: 'F03A10F02',
        example: 'MK07250120000058984'
    },
    ML: {
        length: 28,
        structure: 'U01F23',
        example: 'ML15A12345678901234567890123'
    },
    MR: {
        length: 27,
        structure: 'F05F05F11F02',
        example: 'MR1300020001010000123456753'
    },
    MT: {
        length: 31,
        structure: 'U04F05A18',
        example: 'MT84MALT011000012345MTLCAST001S'
    },
    MU: {
        length: 30,
        structure: 'U04F02F02F12F03U03',
        example: 'MU17BOMM0101101030300200000MUR'
    },
    MZ: {
        length: 25,
        structure: 'F21',
        example: 'MZ25123456789012345678901'
    },
    NL: {
        length: 18,
        structure: 'U04F10',
        example: 'NL91ABNA0417164300'
    },
    NO: {
        length: 15,
        structure: 'F04F06F01',
        example: 'NO9386011117947'
    },
    PK: {
        length: 24,
        structure: 'U04A16',
        example: 'PK36SCBL0000001123456702'
    },
    PL: {
        length: 28,
        structure: 'F08F16',
        example: 'PL61109010140000071219812874'
    },
    PS: {
        length: 29,
        structure: 'U04A21',
        example: 'PS92PALS000000000400123456702'
    },
    PT: {
        length: 25,
        structure: 'F04F04F11F02',
        example: 'PT50000201231234567890154'
    },
    QA: {
        length: 29,
        structure: 'U04A21',
        example: 'QA30AAAA123456789012345678901'
    },
    RO: {
        length: 24,
        structure: 'U04A16',
        example: 'RO49AAAA1B31007593840000'
    },
    RS: {
        length: 22,
        structure: 'F03F13F02',
        example: 'RS35260005601001611379'
    },
    SA: {
        length: 24,
        structure: 'F02A18',
        example: 'SA0380000000608010167519'
    },
    SC: {
        length: 31,
        structure: 'U04F04F16U03',
        example: 'SC18SSCB11010000000000001497USD'
    },
    SE: {
        length: 24,
        structure: 'F03F16F01',
        example: 'SE4550000000058398257466'
    },
    SI: {
        length: 19,
        structure: 'F05F08F02',
        example: 'SI56263300012039086'
    },
    SK: {
        length: 24,
        structure: 'F04F06F10',
        example: 'SK3112000000198742637541'
    },
    SM: {
        length: 27,
        structure: 'U01F05F05A12',
        example: 'SM86U0322509800000000270100'
    },
    SN: {
        length: 28,
        structure: 'U01F23',
        example: 'SN52A12345678901234567890123'
    },
    ST: {
        length: 25,
        structure: 'F08F11F02',
        example: 'ST68000100010051845310112'
    },
    SV: {
        length: 28,
        structure: 'U04F20',
        example: 'SV62CENR00000000000000700025'
    },
    TL: {
        length: 23,
        structure: 'F03F14F02',
        example: 'TL380080012345678910157'
    },
    TN: {
        length: 24,
        structure: 'F02F03F13F02',
        example: 'TN5910006035183598478831'
    },
    TR: {
        length: 26,
        structure: 'F05F01A16',
        example: 'TR330006100519786457841326'
    },
    UA: {
        length: 29,
        structure: 'F25',
        example: 'UA511234567890123456789012345'
    },
    VA: {
        length: 22,
        structure: 'F18',
        example: 'VA59001123000012345678'
    },
    VG: {
        length: 24,
        structure: 'U04F16',
        example: 'VG96VPVG0000012345678901'
    },
    XK: {
        length: 20,
        structure: 'F04F10F02',
        example: 'XK051212012345678906'
    }
};
const A = 'A'.charCodeAt(0);
const Z = 'Z'.charCodeAt(0);
function parseStructure(structure) {
    // split in blocks of 3 chars
    const regex = structure.match(/(.{3})/g).map(function(block) {
        // parse each structure block (1-char + 2-digits)
        let format;
        const pattern = block.slice(0, 1);
        const repeats = parseInt(block.slice(1), 10);
        switch(pattern){
            case 'A':
                format = '0-9A-Za-z';
                break;
            case 'B':
                format = '0-9A-Z';
                break;
            case 'C':
                format = 'A-Za-z';
                break;
            case 'F':
                format = '0-9';
                break;
            case 'L':
                format = 'a-z';
                break;
            case 'U':
                format = 'A-Z';
                break;
            case 'W':
                format = '0-9a-z';
                break;
        }
        return '([' + format + ']{' + repeats + '})';
    });
    return /*#__PURE__*/ new RegExp('^' + regex.join('') + '$');
}
/**
 * Prepare an IBAN for mod 97 computation by moving the first 4 chars to the end and transforming the letters to
 * numbers (A = 10, B = 11, ..., Z = 35), as specified in ISO13616.
 *
 */ function iso13616Prepare(iban) {
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);
    return iban.split('').map(function(n) {
        const code = n.charCodeAt(0);
        if (code >= A && code <= Z) {
            // A = 10, B = 11, ... Z = 35
            return code - A + 10;
        } else {
            return n;
        }
    }).join('');
}
/**
 * Calculates the MOD 97 10 of the passed IBAN as specified in ISO7064.
 *
 * @param iban
 * @returns {number}
 */ function iso7064Mod97_10(iban) {
    let remainder = iban;
    let block;
    while(remainder.length > 2){
        block = remainder.slice(0, 9);
        remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
}
function _testIBAN(iban, countryCode, structure) {
    return structure.length === iban.length && countryCode === iban.slice(0, 2) && parseStructure(structure.structure).test(iban.slice(4)) && iso7064Mod97_10(iso13616Prepare(iban)) === 1;
}
function validate(iban) {
    // Make uppercase and remove whitespace for matching
    iban = iban.toUpperCase().replace(/\s+/g, '');
    const countryCode = iban.slice(0, 2);
    const countryStructure = IBAN_SPECIFICATIONS[countryCode];
    return !!countryStructure && _testIBAN(iban, countryCode, countryStructure);
}
exports.GraphQLIBAN = new graphql_1.GraphQLScalarType({
    name: `IBAN`,
    description: `A field whose value is an International Bank Account Number (IBAN): https://en.wikipedia.org/wiki/International_Bank_Account_Number.`,
    serialize (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!validate(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid IBAN: ${value}`);
        }
        return value;
    },
    parseValue (value) {
        if (typeof value !== 'string') {
            throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
        }
        if (!validate(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid IBAN: ${value}`);
        }
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as IBANs but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (!validate(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid IBAN: ${ast.value}`);
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            type: 'string'
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ObjectID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLObjectID = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const MONGODB_OBJECTID_REGEX = /*#__PURE__*/ /^[A-Fa-f0-9]{24}$/;
exports.GraphQLObjectID = new graphql_1.GraphQLScalarType({
    name: 'ObjectID',
    description: 'A field whose value conforms with the standard mongodb object ID as described here: https://docs.mongodb.com/manual/reference/method/ObjectId/#ObjectId. Example: 5e5677d71bdc2ae76344968c',
    serialize (value) {
        if (!MONGODB_OBJECTID_REGEX.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid mongodb object id of form: ${value}`);
        }
        return value;
    },
    parseValue (value) {
        if (!MONGODB_OBJECTID_REGEX.test(value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid mongodb object id of form: ${value}`);
        }
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as mongodb object id but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        if (!MONGODB_OBJECTID_REGEX.test(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid mongodb object id of form: ${ast.value}`, {
                nodes: ast
            });
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'ObjectID',
            type: 'string',
            pattern: MONGODB_OBJECTID_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Void.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLVoid = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
exports.GraphQLVoid = new graphql_1.GraphQLScalarType({
    name: 'Void',
    description: 'Represents NULL values',
    serialize () {
        return '';
    },
    parseValue () {
        return null;
    },
    parseLiteral () {
        return null;
    },
    extensions: {
        codegenScalarType: 'void'
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/DID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDID = exports.GraphQLDIDConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// See: https://www.w3.org/TR/2021/PR-did-core-20210803/#did-syntax
const DID_REGEX = /^did:[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+:[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]*:?[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]*:?[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]*$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!DID_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid DID: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://www.w3.org/TR/did-core/';
exports.GraphQLDIDConfig = {
    name: 'DID',
    description: 'A field whose value conforms to the standard DID format as specified in did-core: https://www.w3.org/TR/did-core/.',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as DID but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'DID',
            type: 'string',
            pattern: DID_REGEX.source
        }
    }
};
exports.GraphQLDID = new graphql_1.GraphQLScalarType(exports.GraphQLDIDConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/CountryCode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLCountryCode = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const COUNTRY_CODE_REGEX = /^(AD|AE|AF|AG|AI|AL|AM|AO|AQ|AR|AS|AT|AU|AW|AX|AZ|BA|BB|BD|BE|BF|BG|BH|BI|BJ|BL|BM|BN|BO|BQ|BR|BS|BT|BV|BW|BY|BZ|CA|CC|CD|CF|CG|CH|CI|CK|CL|CM|CN|CO|CR|CU|CV|CW|CX|CY|CZ|DE|DJ|DK|DM|DO|DZ|EC|EE|EG|EH|ER|ES|ET|FI|FJ|FK|FM|FO|FR|GA|GB|GD|GE|GF|GG|GH|GI|GL|GM|GN|GP|GQ|GR|GS|GT|GU|GW|GY|HK|HM|HN|HR|HT|HU|ID|IE|IL|IM|IN|IO|IQ|IR|IS|IT|JE|JM|JO|JP|KE|KG|KH|KI|KM|KN|KP|KR|KW|KY|KZ|LA|LB|LC|LI|LK|LR|LS|LT|LU|LV|LY|MA|MC|MD|ME|MF|MG|MH|MK|ML|MM|MN|MO|MP|MQ|MR|MS|MT|MU|MV|MW|MX|MY|MZ|NA|NC|NE|NF|NG|NI|NL|NO|NP|NR|NU|NZ|OM|PA|PE|PF|PG|PH|PK|PL|PM|PN|PR|PS|PT|PW|PY|QA|RE|RO|RS|RU|RW|SA|SB|SC|SD|SE|SG|SH|SI|SJ|SK|SL|SM|SN|SO|SR|SS|ST|SV|SX|SY|SZ|TC|TD|TF|TG|TH|TJ|TK|TL|TM|TN|TO|TR|TT|TV|TW|TZ|UA|UG|UM|US|UY|UZ|VA|VC|VE|VG|VI|VN|VU|WF|WS|XK|YE|YT|ZA|ZM|ZW)$/i;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!COUNTRY_CODE_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid country code: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLCountryCode = new graphql_1.GraphQLScalarType({
    name: 'CountryCode',
    description: 'A country code as defined by ISO 3166-1 alpha-2',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as country codes but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'CountryCode',
            type: 'string',
            pattern: COUNTRY_CODE_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Locale.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLocale = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const BCP_47_REGEX = /^(((en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))|((([A-Za-z]{2,3}(-([A-Za-z]{3}(-[A-Za-z]{3}){0,2}))?)|[A-Za-z]{4}|[A-Za-z]{5,8})(-([A-Za-z]{4}))?(-([A-Za-z]{2}|[0-9]{3}))?(-([A-Za-z0-9]{5,8}|[0-9][A-Za-z0-9]{3}))*(-([0-9A-WY-Za-wy-z](-[A-Za-z0-9]{2,8})+))*(-(x(-[A-Za-z0-9]{1,8})+))?)|(x(-[A-Za-z0-9]{1,8})+))$/;
function validate(value, ast) {
    if (!value) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid string. Received: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    const isValidFormat = BCP_47_REGEX.test(value);
    if (!isValidFormat) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid BCP-47 standard formatted string. Received: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
}
exports.GraphQLLocale = new graphql_1.GraphQLScalarType({
    name: 'Locale',
    description: 'The locale in the format of a BCP 47 (RFC 5646) standard string',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return validate(ast.value, ast);
        }
        throw (0, error_js_1.createGraphQLError)(`Value is not a string. Received: ${ast.kind}`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Locale',
            type: 'string',
            pattern: BCP_47_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RoutingNumber.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLRoutingNumber = exports.GraphQLRoutingNumberConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const routingNumber = (rtn)=>'' + rtn;
const haveNineDigits = (rtn)=>/^\d{9}$/.test(rtn);
/**
 * Calculates checksum for MIRC format XXXXYYYYC where C is the check digit
 *
 * The checksum is position-weighted sum of each of the digits. So, given the
 * routing number `031001175`, which The last digit (5 in the example), is the
 * check digit. The calculation is given in terms of the eight first digits:
 *
 * 0    3   1   0   0   1   1   7
 *                x
 * 3    7   1   3   7   1   3   7
 * ____________________________________
 * 0 + 21 + 1 + 0 + 0 + 1 + 3 + 49 = 75
 * ____________________________________
 * 75 + 5 (check digit) = 80 (Must multiple of 10)
 */ const checksum = (rtn)=>{
    const weight = [
        3,
        7,
        1
    ];
    const accumulator = (acc, curr)=>acc + curr;
    const digits = rtn.split('').map((digit)=>Number.parseInt(digit, 10));
    const checkDigit = digits.pop();
    const sum = digits.map((digit, index)=>digit * weight[index % 3]).reduce(accumulator, 0);
    return (sum + checkDigit) % 10 === 0;
};
const validate = (value, ast)=>{
    if (typeof value !== 'string' && !(typeof value === 'number' && Number.isInteger(value))) {
        throw (0, error_js_1.createGraphQLError)('must be integer or string', ast ? {
            nodes: ast
        } : undefined);
    }
    const rtn = routingNumber(value);
    if (!haveNineDigits(rtn)) {
        throw (0, error_js_1.createGraphQLError)('must have nine digits', ast ? {
            nodes: ast
        } : undefined);
    }
    if (!checksum(rtn)) {
        throw (0, error_js_1.createGraphQLError)("checksum doesn't match", ast ? {
            nodes: ast
        } : undefined);
    }
    return rtn;
};
exports.GraphQLRoutingNumberConfig = {
    name: 'RoutingNumber',
    description: 'In the US, an ABA routing transit number (`ABA RTN`) is a nine-digit ' + 'code to identify the financial institution.',
    specifiedByURL: 'https://en.wikipedia.org/wiki/ABA_routing_transit_number',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.INT || ast.kind === graphql_1.Kind.STRING) {
            return validate(ast.value, ast);
        }
        throw (0, error_js_1.createGraphQLError)(`ABA Routing Transit Number can only parse Integer or String but got '${ast.kind}'`, {
            nodes: ast
        });
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'RoutingNumber',
            type: 'string',
            pattern: /^\d{9}$/.source
        }
    }
};
exports.GraphQLRoutingNumber = new graphql_1.GraphQLScalarType(exports.GraphQLRoutingNumberConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/AccountNumber.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLAccountNumber = exports.GraphQLAccountNumberConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const regexp = /^([a-zA-Z0-9]){5,17}$/;
const validator = (rtn)=>regexp.test(rtn);
const validate = (account, ast)=>{
    if (typeof account !== 'string') {
        throw (0, error_js_1.createGraphQLError)('can only parse String', ast ? {
            nodes: ast
        } : undefined);
    }
    if (!validator(account)) {
        throw (0, error_js_1.createGraphQLError)('must be alphanumeric between 5-17', ast ? {
            nodes: ast
        } : undefined);
    }
    return account;
};
exports.GraphQLAccountNumberConfig = {
    name: 'AccountNumber',
    description: 'Banking account number is a string of 5 to 17 alphanumeric values for ' + 'representing an generic account number',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return validate(ast.value, ast);
        }
        throw (0, error_js_1.createGraphQLError)(`Account Number can only parse String but got '${ast.kind}'`, {
            nodes: [
                ast
            ]
        });
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'AccountNumber',
            type: 'string',
            pattern: regexp.source
        }
    }
};
exports.GraphQLAccountNumber = new graphql_1.GraphQLScalarType(exports.GraphQLAccountNumberConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Cuid.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLCuid = exports.GraphQLCuidConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const CUID_REGEX = /^c[^\s-]{8,}$/i;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!CUID_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid cuid: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://github.com/ericelliott/cuid#broken-down';
exports.GraphQLCuidConfig = {
    name: 'Cuid',
    description: 'A field whose value conforms to the standard cuid format as specified in https://github.com/ericelliott/cuid#broken-down',
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as cuids but got a: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Cuid',
            type: 'string',
            pattern: CUID_REGEX.source
        }
    }
};
exports.GraphQLCuid = new graphql_1.GraphQLScalarType(exports.GraphQLCuidConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/SemVer.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLSemVer = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const SEMVER_REGEX = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!SEMVER_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid Semantic Version: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
exports.GraphQLSemVer = new graphql_1.GraphQLScalarType({
    name: `SemVer`,
    description: `A field whose value is a Semantic Version: https://semver.org`,
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as Semantic Version but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'SemVer',
            type: 'string',
            pattern: SEMVER_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ssn/SE.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLSESSN = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
// Swedish Personal Number also known as 'personnummer' in swedish:
// https://www.skatteverket.se/privat/folkbokforing/personnummer.4.3810a01c150939e893f18c29.html
// Algorithm:
// https://swedish.identityinfo.net/personalidentitynumber
const SESSN_PATTERNS = [
    'YYYYMMDDXXXX',
    'YYMMDDXXXX'
];
function _isValidSwedishPersonalNumber(value) {
    // Remove any non-digit characters
    const pno = value.replace(/\D/g, '');
    // Check if the cleaned number has the correct length (10 or 12 digits)
    if (pno.length !== 10 && pno.length !== 12) {
        return false;
    }
    // Validate the birthdate
    if (!_isValidDate(pno)) {
        return false;
    }
    // Check the checksum for numbers
    if (!_isValidChecksum(pno)) {
        return false;
    }
    // If all checks pass, the personal number is valid
    return true;
}
function _isValidDate(pno) {
    let year;
    let month;
    let day;
    if (pno.length === 10) {
        year = Number(pno.substring(0, 2));
        // Adjust the input 'year' to a four-digit year based on the assumption that two-digit years greater than the current year are in the past century (1900s),
        // while two-digit years less than or equal to the current year are in the current or upcoming century (2000s).
        year = year > Number(String(new Date().getFullYear()).substring(2)) ? 1900 + year : 2000 + year;
        month = Number(pno.substring(2, 4));
        day = Number(pno.substring(4, 6));
    } else {
        year = Number(pno.substring(0, 4));
        month = Number(pno.substring(4, 6));
        day = Number(pno.substring(6, 8));
    }
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day;
}
function _isValidChecksum(pno) {
    const shortPno = pno.length === 12 ? pno.substring(2, 12) : pno;
    const digits = shortPno.split('').map(Number);
    let sum = 0;
    for(let i = 0; i < digits.length; i++){
        let digit = digits[i];
        // Double every second digit from the right
        if (i % 2 === digits.length % 2) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    // Check if the sum is a multiple of 10
    return sum % 10 === 0;
}
function _checkString(value) {
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`);
    }
}
function _checkSSN(value) {
    if (!_isValidSwedishPersonalNumber(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid swedish personal number: ${value}`);
    }
}
exports.GraphQLSESSN = new graphql_1.GraphQLScalarType({
    name: 'SESSN',
    description: 'A field whose value conforms to the standard personal number (personnummer) formats for Sweden',
    serialize (value) {
        _checkString(value);
        _checkSSN(value);
        return value;
    },
    parseValue (value) {
        _checkString(value);
        _checkSSN(value);
        return value;
    },
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as swedish personal number but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        if (!_isValidSwedishPersonalNumber(ast.value)) {
            throw (0, error_js_1.createGraphQLError)(`Value is not a valid swedish personal number: ${ast.value}`, {
                nodes: ast
            });
        }
        return ast.value;
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'SESSN',
            oneOf: SESSN_PATTERNS.map((pattern)=>({
                    type: 'string',
                    length: pattern.length,
                    pattern
                }))
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/library/DeweyDecimal.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLDeweyDecimal = exports.GraphQLDeweyDecimalConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const DEWEY_DECIMAL_REGEX = /^[0-9]{1,3}(?:\.[0-9]+)?$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, {
            nodes: ast
        });
    }
    if (!DEWEY_DECIMAL_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid Dewey Decimal Number: ${value}`, {
            nodes: ast
        });
    }
    return value;
};
const specifiedByURL = 'https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf';
exports.GraphQLDeweyDecimalConfig = {
    name: 'DeweyDecimal',
    description: `A field whose value conforms to the standard DeweyDecimal format as specified by the OCLC https://www.oclc.org/content/dam/oclc/dewey/resources/summaries/deweysummaries.pdf`,
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as DeweyDecimal but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'DeweyDecimal',
            type: 'string',
            pattern: DEWEY_DECIMAL_REGEX.source
        }
    }
};
exports.GraphQLDeweyDecimal = new graphql_1.GraphQLScalarType(exports.GraphQLDeweyDecimalConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/library/LCCSubclass.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLLCCSubclass = exports.GraphQLLCCSubclassConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
//Regex for the various letter subclasses of the Library of Congress Classification
//As defined in the pdfs available by clicking on the letters at this link
//https://www.loc.gov/catdir/cpso/lcco/
const LCC_SUBCLASS_PREFIX = /^((AC|AE|AG|AI|AM|AN|AP|AS|AY|AZ)|[B][CDFHJLMPQRSTVX]{0,1}|[C][BCDEJNRST]{0,1}|[D][AWBCDEFGH]{0,1}|[E]|[F]|[G][ABCEFNRTV]{0,1}|[H][ABCDEFGJMNQSTVX]{0,1}|[J][ACFJKLNQSVXZ]{0,1}|(K|KB[M,P,R,U]|KD[C,E,G,K,Z]{0,1}|KE[ABMNOPQSYZ]{0,1}|KF[ACDFGHIKLMNOPRSTUVWXZ]{0,1}|KG[ABCDEFGHJKLMNPQRSTUVWXYZ]{0,1}|KH[ACDFHKLMNPQSUW]{0,1}|KJ[ACEGHJKMNPRSTVW]{0,1}|KK[ABEFGHIJKLMNPQRSTVWXYZ]{0,1}|KL[ABDEFHMNPQRSTVW]{0,1}|KM[CEFGHJKLMNPQSTUVXY]{0,1}|KN[CEFGHKLMNPQRSTUVWXY]{0,1}|KP[ACEFGHJKLMPSTVW]{0,1}|KQ[CEGHJKMPTVWX]{0,1}|KR[BCEGKLMNPRSUVWXY]{0,1}|KS[ACEGHKLNPRSTUVWXYZ]{0,1}|KT[ACDEFGHJKLNQRTUVWXYZ]{0,1}|KU[ABCDEFGHNQ]{0,1}|KV[BCEHLMNPQRSUW]{0,1}|KW[ACEGHLPQRTWX]{0,1}|KZ[AD]{0,1})|[L][ABCDEFGHJT]{0,1}|[M][LT]{0,1}|[N][ABCDEKX]{0,1}|[P][ABCDEFGHJKLMNQRSTZ]{0,1}|[Q][ABCDEHKLMPR]{0,1}|[R][ABCDEFGJKLMSTVXZ]{0,1}|[S][BDFHK]{0,1}|[T][ACDEFGHJKLNPRSTX]{0,1}|[U][ABCDEFGH]{0,1}|[V][ABCDEFGKM]{0,1}|[Z][A]{0,1})$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, {
            nodes: ast
        });
    }
    if (!LCC_SUBCLASS_PREFIX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid LCC Subclass: ${value}`, {
            nodes: ast
        });
    }
    return value;
};
const specifiedByURL = 'https://www.loc.gov/catdir/cpso/lcco/';
exports.GraphQLLCCSubclassConfig = {
    name: 'LCCSubclass',
    description: `A field whose value conforms to the Library of Congress Subclass Format ttps://www.loc.gov/catdir/cpso/lcco/`,
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as LCC Subclasses but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'DeweyDecimal',
            type: 'string',
            pattern: LCC_SUBCLASS_PREFIX.source
        }
    }
};
exports.GraphQLLCCSubclass = new graphql_1.GraphQLScalarType(exports.GraphQLLCCSubclassConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/patent/IPCPatent.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLIPCPatent = exports.GraphQLIPCPatentConfig = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
/* 1. [A-H] represents the Section Level of the Classification
   2. \d{2} represents the class level
   3. [A-Z] represents the subclass level
   4. \/ separates the subclass from the subgroup
   5. \d{2,4} represents the subgroup level
      (Only four levels of subgroup, as far as I know)
*/ const IPC_PATENT_REGEX = /^[A-H]\d{2}[A-Z] \d{1,2}\/\d{2,4}$/;
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, {
            nodes: ast
        });
    }
    if (!IPC_PATENT_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid IPC Class Symbol: ${value}`, {
            nodes: ast
        });
    }
    return value;
};
const specifiedByURL = 'https://www.wipo.int/classifications/ipc/en/';
exports.GraphQLIPCPatentConfig = {
    name: 'IPCPatent',
    description: `A field whose value is an IPC Class Symbol within the International Patent Classification System: https://www.wipo.int/classifications/ipc/en/`,
    serialize: validate,
    parseValue: validate,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as an IPC Class Symbol but got a: ${ast.kind}`, {
                nodes: ast
            });
        }
        return validate(ast.value, ast);
    },
    specifiedByURL,
    specifiedByUrl: specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'DeweyDecimal',
            type: 'string',
            pattern: IPC_PATENT_REGEX.source
        }
    }
};
exports.GraphQLIPCPatent = new graphql_1.GraphQLScalarType(exports.GraphQLIPCPatentConfig);
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ULID.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLULID = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const ULID_REGEX = /^[0-7][0-9ABCDEFGHJKMNPQRSTVWXYZ]{25}$/i;
/**
 * Check if a ULID is valid according to the official spec
 * @param id The ULID to test
 * @returns True if valid, false otherwise
 */ const isValid = (id)=>{
    return typeof id === 'string' && ULID_REGEX.test(id);
};
const validate = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)('ULID can only parse String', ast ? {
            nodes: ast
        } : undefined);
    }
    if (!isValid(value)) {
        throw (0, error_js_1.createGraphQLError)('Invalid ULID format', ast ? {
            nodes: ast
        } : undefined);
    }
    // Return the normalized uppercase version
    return value.toUpperCase();
};
exports.GraphQLULID = new graphql_1.GraphQLScalarType({
    name: 'ULID',
    description: 'A ULID (Universally Unique Lexicographically Sortable Identifier) is a 26-character ' + 'string that is URL-safe, case-insensitive, and lexicographically sortable.',
    serialize (value) {
        return validate(value);
    },
    parseValue (value) {
        return validate(value);
    },
    parseLiteral (ast) {
        if (ast.kind === graphql_1.Kind.STRING) {
            return validate(ast.value, ast);
        }
        throw (0, error_js_1.createGraphQLError)(`ULID can only parse String but got '${ast.kind}'`, {
            nodes: [
                ast
            ]
        });
    },
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'ULID',
            type: 'string',
            pattern: ULID_REGEX.source,
            minLength: 26,
            maxLength: 26
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Cuid2.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLCuid2 = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
const CUID2_REGEX = /^[a-z][a-z0-9]{1,31}$/;
const validateCuid2 = (value, ast)=>{
    if (typeof value !== 'string') {
        throw (0, error_js_1.createGraphQLError)(`Value is not string: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    if (!CUID2_REGEX.test(value)) {
        throw (0, error_js_1.createGraphQLError)(`Value is not a valid cuid2: ${value}`, ast ? {
            nodes: ast
        } : undefined);
    }
    return value;
};
const specifiedByURL = 'https://github.com/paralleldrive/cuid2';
exports.GraphQLCuid2 = new graphql_1.GraphQLScalarType({
    name: 'Cuid2',
    description: `A field whose value conforms to the cuid2 format, as specified in ${specifiedByURL}`,
    serialize: validateCuid2,
    parseValue: validateCuid2,
    parseLiteral (ast) {
        if (ast.kind !== graphql_1.Kind.STRING) {
            throw (0, error_js_1.createGraphQLError)(`Can only validate strings as cuid2 but got: ${ast.kind}`, {
                nodes: [
                    ast
                ]
            });
        }
        return validateCuid2(ast.value, ast);
    },
    specifiedByURL,
    extensions: {
        codegenScalarType: 'string',
        jsonSchema: {
            title: 'Cuid2',
            type: 'string',
            pattern: CUID2_REGEX.source
        }
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GraphQLRGB = exports.GraphQLPort = exports.GraphQLMAC = exports.GraphQLLongitude = exports.GraphQLLatitude = exports.GraphQLJWT = exports.GraphQLISBN = exports.GraphQLIPv6 = exports.GraphQLIPv4 = exports.GraphQLIP = exports.GraphQLHSLA = exports.GraphQLHSL = exports.GraphQLHexColorCode = exports.GraphQLHexadecimal = exports.GraphQLGUID = exports.GraphQLUUID = exports.GraphQLSafeInt = exports.GraphQLLong = exports.GraphQLByte = exports.GraphQLBigInt = exports.GraphQLURL = exports.GraphQLUnsignedInt = exports.GraphQLUnsignedFloat = exports.GraphQLPostalCode = exports.GraphQLPositiveInt = exports.GraphQLPositiveFloat = exports.GraphQLPhoneNumber = exports.GraphQLNonPositiveInt = exports.GraphQLNonPositiveFloat = exports.GraphQLNonNegativeInt = exports.GraphQLNonNegativeFloat = exports.GraphQLNonEmptyString = exports.GraphQLNegativeInt = exports.GraphQLNegativeFloat = exports.GraphQLEmailAddress = exports.GraphQLLocalEndTime = exports.GraphQLLocalDateTime = exports.GraphQLLocalTime = exports.GraphQLLocalDate = exports.GraphQLISO8601Duration = exports.GraphQLUtcOffset = exports.GraphQLTimeZone = exports.GraphQLTimestamp = exports.GraphQLDuration = exports.GraphQLDateTimeISO = exports.GraphQLDateTime = exports.GraphQLTime = exports.GraphQLDate = exports.GraphQLCountryName = exports.GraphQLGeoJSON = void 0;
exports.GraphQLCuid2 = exports.GraphQLULID = exports.GraphQLIPCPatent = exports.GraphQLLCCSubclass = exports.GraphQLDeweyDecimal = exports.GraphQLSESSN = exports.GraphQLSemVer = exports.GraphQLCuid = exports.GraphQLAccountNumber = exports.GraphQLRoutingNumber = exports.GraphQLLocale = exports.GraphQLCountryCode = exports.GraphQLDID = exports.GraphQLVoid = exports.GraphQLObjectID = exports.GraphQLIBAN = exports.GraphQLJSONObject = exports.GraphQLJSON = exports.GraphQLCurrency = exports.GraphQLUSCurrency = exports.GraphQLRGBA = void 0;
var index_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GeoJSON/index.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLGeoJSON", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLGeoJSON;
    }
});
var CountryName_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/CountryName.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLCountryName", {
    enumerable: true,
    get: function() {
        return CountryName_js_1.GraphQLCountryName;
    }
});
var Date_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Date.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDate", {
    enumerable: true,
    get: function() {
        return Date_js_1.GraphQLDate;
    }
});
var Time_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Time.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLTime", {
    enumerable: true,
    get: function() {
        return Time_js_1.GraphQLTime;
    }
});
var DateTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/DateTime.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDateTime", {
    enumerable: true,
    get: function() {
        return DateTime_js_1.GraphQLDateTime;
    }
});
var DateTimeISO_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/DateTimeISO.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDateTimeISO", {
    enumerable: true,
    get: function() {
        return DateTimeISO_js_1.GraphQLDateTimeISO;
    }
});
var Duration_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Duration.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDuration", {
    enumerable: true,
    get: function() {
        return Duration_js_1.GraphQLDuration;
    }
});
var Timestamp_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Timestamp.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLTimestamp", {
    enumerable: true,
    get: function() {
        return Timestamp_js_1.GraphQLTimestamp;
    }
});
var TimeZone_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/TimeZone.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLTimeZone", {
    enumerable: true,
    get: function() {
        return TimeZone_js_1.GraphQLTimeZone;
    }
});
var UtcOffset_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UtcOffset.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLUtcOffset", {
    enumerable: true,
    get: function() {
        return UtcOffset_js_1.GraphQLUtcOffset;
    }
});
var Duration_js_2 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/iso-date/Duration.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLISO8601Duration", {
    enumerable: true,
    get: function() {
        return Duration_js_2.GraphQLISO8601Duration;
    }
});
var LocalDate_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalDate.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLocalDate", {
    enumerable: true,
    get: function() {
        return LocalDate_js_1.GraphQLLocalDate;
    }
});
var LocalTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalTime.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLocalTime", {
    enumerable: true,
    get: function() {
        return LocalTime_js_1.GraphQLLocalTime;
    }
});
var LocalDateTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalDateTime.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLocalDateTime", {
    enumerable: true,
    get: function() {
        return LocalDateTime_js_1.GraphQLLocalDateTime;
    }
});
var LocalEndTime_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/LocalEndTime.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLocalEndTime", {
    enumerable: true,
    get: function() {
        return LocalEndTime_js_1.GraphQLLocalEndTime;
    }
});
var EmailAddress_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/EmailAddress.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLEmailAddress", {
    enumerable: true,
    get: function() {
        return EmailAddress_js_1.GraphQLEmailAddress;
    }
});
var NegativeFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NegativeFloat.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNegativeFloat", {
    enumerable: true,
    get: function() {
        return NegativeFloat_js_1.GraphQLNegativeFloat;
    }
});
var NegativeInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NegativeInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNegativeInt", {
    enumerable: true,
    get: function() {
        return NegativeInt_js_1.GraphQLNegativeInt;
    }
});
var NonEmptyString_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonEmptyString.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNonEmptyString", {
    enumerable: true,
    get: function() {
        return NonEmptyString_js_1.GraphQLNonEmptyString;
    }
});
var NonNegativeFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeFloat.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNonNegativeFloat", {
    enumerable: true,
    get: function() {
        return NonNegativeFloat_js_1.GraphQLNonNegativeFloat;
    }
});
var NonNegativeInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonNegativeInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNonNegativeInt", {
    enumerable: true,
    get: function() {
        return NonNegativeInt_js_1.GraphQLNonNegativeInt;
    }
});
var NonPositiveFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonPositiveFloat.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNonPositiveFloat", {
    enumerable: true,
    get: function() {
        return NonPositiveFloat_js_1.GraphQLNonPositiveFloat;
    }
});
var NonPositiveInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/NonPositiveInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLNonPositiveInt", {
    enumerable: true,
    get: function() {
        return NonPositiveInt_js_1.GraphQLNonPositiveInt;
    }
});
var PhoneNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PhoneNumber.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLPhoneNumber", {
    enumerable: true,
    get: function() {
        return PhoneNumber_js_1.GraphQLPhoneNumber;
    }
});
var PositiveFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PositiveFloat.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLPositiveFloat", {
    enumerable: true,
    get: function() {
        return PositiveFloat_js_1.GraphQLPositiveFloat;
    }
});
var PositiveInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PositiveInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLPositiveInt", {
    enumerable: true,
    get: function() {
        return PositiveInt_js_1.GraphQLPositiveInt;
    }
});
var PostalCode_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/PostalCode.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLPostalCode", {
    enumerable: true,
    get: function() {
        return PostalCode_js_1.GraphQLPostalCode;
    }
});
var UnsignedFloat_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UnsignedFloat.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLUnsignedFloat", {
    enumerable: true,
    get: function() {
        return UnsignedFloat_js_1.GraphQLUnsignedFloat;
    }
});
var UnsignedInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UnsignedInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLUnsignedInt", {
    enumerable: true,
    get: function() {
        return UnsignedInt_js_1.GraphQLUnsignedInt;
    }
});
var URL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/URL.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLURL", {
    enumerable: true,
    get: function() {
        return URL_js_1.GraphQLURL;
    }
});
var BigInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/BigInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLBigInt", {
    enumerable: true,
    get: function() {
        return BigInt_js_1.GraphQLBigInt;
    }
});
var Byte_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Byte.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLByte", {
    enumerable: true,
    get: function() {
        return Byte_js_1.GraphQLByte;
    }
});
var Long_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Long.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLong", {
    enumerable: true,
    get: function() {
        return Long_js_1.GraphQLLong;
    }
});
var SafeInt_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/SafeInt.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLSafeInt", {
    enumerable: true,
    get: function() {
        return SafeInt_js_1.GraphQLSafeInt;
    }
});
var UUID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/UUID.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLUUID", {
    enumerable: true,
    get: function() {
        return UUID_js_1.GraphQLUUID;
    }
});
var GUID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/GUID.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLGUID", {
    enumerable: true,
    get: function() {
        return GUID_js_1.GraphQLGUID;
    }
});
var Hexadecimal_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Hexadecimal.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLHexadecimal", {
    enumerable: true,
    get: function() {
        return Hexadecimal_js_1.GraphQLHexadecimal;
    }
});
var HexColorCode_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HexColorCode.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLHexColorCode", {
    enumerable: true,
    get: function() {
        return HexColorCode_js_1.GraphQLHexColorCode;
    }
});
var HSL_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HSL.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLHSL", {
    enumerable: true,
    get: function() {
        return HSL_js_1.GraphQLHSL;
    }
});
var HSLA_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/HSLA.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLHSLA", {
    enumerable: true,
    get: function() {
        return HSLA_js_1.GraphQLHSLA;
    }
});
var IP_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IP.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLIP", {
    enumerable: true,
    get: function() {
        return IP_js_1.GraphQLIP;
    }
});
var IPv4_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv4.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLIPv4", {
    enumerable: true,
    get: function() {
        return IPv4_js_1.GraphQLIPv4;
    }
});
var IPv6_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IPv6.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLIPv6", {
    enumerable: true,
    get: function() {
        return IPv6_js_1.GraphQLIPv6;
    }
});
var ISBN_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ISBN.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLISBN", {
    enumerable: true,
    get: function() {
        return ISBN_js_1.GraphQLISBN;
    }
});
var JWT_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/JWT.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLJWT", {
    enumerable: true,
    get: function() {
        return JWT_js_1.GraphQLJWT;
    }
});
var Latitude_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Latitude.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLatitude", {
    enumerable: true,
    get: function() {
        return Latitude_js_1.GraphQLLatitude;
    }
});
var Longitude_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Longitude.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLongitude", {
    enumerable: true,
    get: function() {
        return Longitude_js_1.GraphQLLongitude;
    }
});
var MAC_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/MAC.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLMAC", {
    enumerable: true,
    get: function() {
        return MAC_js_1.GraphQLMAC;
    }
});
var Port_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Port.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLPort", {
    enumerable: true,
    get: function() {
        return Port_js_1.GraphQLPort;
    }
});
var RGB_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RGB.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLRGB", {
    enumerable: true,
    get: function() {
        return RGB_js_1.GraphQLRGB;
    }
});
var RGBA_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RGBA.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLRGBA", {
    enumerable: true,
    get: function() {
        return RGBA_js_1.GraphQLRGBA;
    }
});
var USCurrency_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/USCurrency.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLUSCurrency", {
    enumerable: true,
    get: function() {
        return USCurrency_js_1.GraphQLUSCurrency;
    }
});
var Currency_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Currency.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLCurrency", {
    enumerable: true,
    get: function() {
        return Currency_js_1.GraphQLCurrency;
    }
});
var JSON_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/JSON.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLJSON", {
    enumerable: true,
    get: function() {
        return JSON_js_1.GraphQLJSON;
    }
});
var JSONObject_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/json/JSONObject.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLJSONObject", {
    enumerable: true,
    get: function() {
        return JSONObject_js_1.GraphQLJSONObject;
    }
});
var IBAN_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/IBAN.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLIBAN", {
    enumerable: true,
    get: function() {
        return IBAN_js_1.GraphQLIBAN;
    }
});
var ObjectID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ObjectID.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLObjectID", {
    enumerable: true,
    get: function() {
        return ObjectID_js_1.GraphQLObjectID;
    }
});
var Void_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Void.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLVoid", {
    enumerable: true,
    get: function() {
        return Void_js_1.GraphQLVoid;
    }
});
var DID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/DID.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDID", {
    enumerable: true,
    get: function() {
        return DID_js_1.GraphQLDID;
    }
});
var CountryCode_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/CountryCode.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLCountryCode", {
    enumerable: true,
    get: function() {
        return CountryCode_js_1.GraphQLCountryCode;
    }
});
var Locale_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Locale.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLocale", {
    enumerable: true,
    get: function() {
        return Locale_js_1.GraphQLLocale;
    }
});
var RoutingNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/RoutingNumber.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLRoutingNumber", {
    enumerable: true,
    get: function() {
        return RoutingNumber_js_1.GraphQLRoutingNumber;
    }
});
var AccountNumber_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/AccountNumber.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLAccountNumber", {
    enumerable: true,
    get: function() {
        return AccountNumber_js_1.GraphQLAccountNumber;
    }
});
var Cuid_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Cuid.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLCuid", {
    enumerable: true,
    get: function() {
        return Cuid_js_1.GraphQLCuid;
    }
});
var SemVer_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/SemVer.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLSemVer", {
    enumerable: true,
    get: function() {
        return SemVer_js_1.GraphQLSemVer;
    }
});
var SE_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ssn/SE.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLSESSN", {
    enumerable: true,
    get: function() {
        return SE_js_1.GraphQLSESSN;
    }
});
var DeweyDecimal_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/library/DeweyDecimal.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLDeweyDecimal", {
    enumerable: true,
    get: function() {
        return DeweyDecimal_js_1.GraphQLDeweyDecimal;
    }
});
var LCCSubclass_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/library/LCCSubclass.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLLCCSubclass", {
    enumerable: true,
    get: function() {
        return LCCSubclass_js_1.GraphQLLCCSubclass;
    }
});
var IPCPatent_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/patent/IPCPatent.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLIPCPatent", {
    enumerable: true,
    get: function() {
        return IPCPatent_js_1.GraphQLIPCPatent;
    }
});
var ULID_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/ULID.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLULID", {
    enumerable: true,
    get: function() {
        return ULID_js_1.GraphQLULID;
    }
});
var Cuid2_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/Cuid2.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GraphQLCuid2", {
    enumerable: true,
    get: function() {
        return Cuid2_js_1.GraphQLCuid2;
    }
});
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RGBA = exports.RGB = exports.PostalCode = exports.PositiveInt = exports.PositiveFloat = exports.Port = exports.PhoneNumber = exports.NonPositiveInt = exports.NonPositiveFloat = exports.NonNegativeInt = exports.NonNegativeFloat = exports.NonEmptyString = exports.NegativeInt = exports.NegativeFloat = exports.MAC = exports.JSONObject = exports.JSON = exports.Longitude = exports.Latitude = exports.JWT = exports.ISBN = exports.IPv6 = exports.IPv4 = exports.IP = exports.IBAN = exports.HSLA = exports.HSL = exports.HexColorCode = exports.Hexadecimal = exports.UUID = exports.EmailAddress = exports.LocalEndTime = exports.LocalDateTime = exports.LocalTime = exports.LocalDate = exports.ISO8601Duration = exports.Duration = exports.UtcOffset = exports.DateTimeISO = exports.DateTime = exports.TimeZone = exports.Timestamp = exports.Time = exports.Date = exports.Byte = exports.BigInt = exports.CountryName = exports.GeoJSON = exports.Cuid2 = exports.ULID = void 0;
exports.typeDefs = exports.IPCPatent = exports.LCCSubclass = exports.DeweyDecimal = exports.Locale = exports.CountryCode = exports.DID = exports.Void = exports.ObjectID = exports.Long = exports.GUID = exports.UnsignedInt = exports.UnsignedFloat = exports.SESSN = exports.SemVer = exports.Cuid = exports.AccountNumber = exports.RoutingNumber = exports.Currency = exports.USCurrency = exports.URL = exports.SafeInt = void 0;
exports.ULID = 'scalar ULID';
exports.Cuid2 = 'scalar Cuid2';
exports.GeoJSON = 'scalar GeoJSON';
exports.CountryName = 'scalar CountryName';
exports.BigInt = 'scalar BigInt';
exports.Byte = 'scalar Byte';
exports.Date = 'scalar Date';
exports.Time = 'scalar Time';
exports.Timestamp = 'scalar Timestamp';
exports.TimeZone = 'scalar TimeZone';
exports.DateTime = 'scalar DateTime';
exports.DateTimeISO = 'scalar DateTimeISO';
exports.UtcOffset = 'scalar UtcOffset';
exports.Duration = 'scalar Duration';
exports.ISO8601Duration = 'scalar ISO8601Duration';
exports.LocalDate = 'scalar LocalDate';
exports.LocalTime = 'scalar LocalTime';
exports.LocalDateTime = 'scalar LocalDateTime';
exports.LocalEndTime = 'scalar LocalEndTime';
exports.EmailAddress = 'scalar EmailAddress';
exports.UUID = 'scalar UUID';
exports.Hexadecimal = 'scalar Hexadecimal';
exports.HexColorCode = 'scalar HexColorCode';
exports.HSL = 'scalar HSL';
exports.HSLA = 'scalar HSLA';
exports.IBAN = 'scalar IBAN';
exports.IP = 'scalar IP';
exports.IPv4 = 'scalar IPv4';
exports.IPv6 = 'scalar IPv6';
exports.ISBN = 'scalar ISBN';
exports.JWT = 'scalar JWT';
exports.Latitude = 'scalar Latitude';
exports.Longitude = 'scalar Longitude';
exports.JSON = 'scalar JSON';
exports.JSONObject = 'scalar JSONObject';
exports.MAC = 'scalar MAC';
exports.NegativeFloat = 'scalar NegativeFloat';
exports.NegativeInt = 'scalar NegativeInt';
exports.NonEmptyString = 'scalar NonEmptyString';
exports.NonNegativeFloat = 'scalar NonNegativeFloat';
exports.NonNegativeInt = 'scalar NonNegativeInt';
exports.NonPositiveFloat = 'scalar NonPositiveFloat';
exports.NonPositiveInt = 'scalar NonPositiveInt';
exports.PhoneNumber = 'scalar PhoneNumber';
exports.Port = 'scalar Port';
exports.PositiveFloat = 'scalar PositiveFloat';
exports.PositiveInt = 'scalar PositiveInt';
exports.PostalCode = 'scalar PostalCode';
exports.RGB = 'scalar RGB';
exports.RGBA = 'scalar RGBA';
exports.SafeInt = 'scalar SafeInt';
exports.URL = 'scalar URL';
exports.USCurrency = 'scalar USCurrency';
exports.Currency = 'scalar Currency';
exports.RoutingNumber = 'scalar RoutingNumber';
exports.AccountNumber = 'scalar AccountNumber';
exports.Cuid = 'scalar Cuid';
exports.SemVer = 'scalar SemVer';
exports.SESSN = 'scalar SESSN';
exports.UnsignedFloat = 'scalar UnsignedFloat';
exports.UnsignedInt = 'scalar UnsignedInt';
exports.GUID = 'scalar GUID';
exports.Long = 'scalar Long';
exports.ObjectID = 'scalar ObjectID';
exports.Void = 'scalar Void';
exports.DID = 'scalar DID';
exports.CountryCode = 'scalar CountryCode';
exports.Locale = 'scalar Locale';
exports.DeweyDecimal = 'scalar DeweyDecimal';
exports.LCCSubclass = 'scalar LCCSubclass';
exports.IPCPatent = 'scalar IPCPatent';
exports.typeDefs = [
    exports.AccountNumber,
    exports.BigInt,
    exports.Byte,
    exports.CountryCode,
    exports.CountryName,
    exports.Cuid,
    exports.Cuid2,
    exports.Currency,
    exports.Date,
    exports.DateTime,
    exports.DateTimeISO,
    exports.DeweyDecimal,
    exports.DID,
    exports.Duration,
    exports.EmailAddress,
    exports.GeoJSON,
    exports.GUID,
    exports.Hexadecimal,
    exports.HexColorCode,
    exports.HSL,
    exports.HSLA,
    exports.IBAN,
    exports.IP,
    exports.IPCPatent,
    exports.IPv4,
    exports.IPv6,
    exports.ISBN,
    exports.ISO8601Duration,
    exports.JSON,
    exports.JSONObject,
    exports.JWT,
    exports.Latitude,
    exports.LCCSubclass,
    exports.LocalDate,
    exports.LocalDateTime,
    exports.Locale,
    exports.LocalEndTime,
    exports.LocalTime,
    exports.Long,
    exports.Longitude,
    exports.MAC,
    exports.NegativeFloat,
    exports.NegativeInt,
    exports.NonEmptyString,
    exports.NonNegativeFloat,
    exports.NonNegativeInt,
    exports.NonPositiveFloat,
    exports.NonPositiveInt,
    exports.ObjectID,
    exports.PhoneNumber,
    exports.Port,
    exports.PositiveFloat,
    exports.PositiveInt,
    exports.PostalCode,
    exports.RGB,
    exports.RGBA,
    exports.RoutingNumber,
    exports.SafeInt,
    exports.SemVer,
    exports.SESSN,
    exports.Time,
    exports.Timestamp,
    exports.TimeZone,
    exports.ULID,
    exports.UnsignedFloat,
    exports.UnsignedInt,
    exports.URL,
    exports.USCurrency,
    exports.UtcOffset,
    exports.UUID,
    exports.Void
];
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/RegularExpression.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegularExpression = void 0;
const graphql_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql@16.12.0/node_modules/graphql/index.mjs [app-route] (ecmascript)");
const error_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/error.js [app-route] (ecmascript)");
class RegularExpression extends graphql_1.GraphQLScalarType {
    constructor(name, regex, options = {}){
        const errorMessage = options.errorMessage ? options.errorMessage : (r, v)=>`Value does not match ${r}: ${v}`;
        super({
            name,
            description: options.description || `A field whose value matches ${regex}.`,
            serialize (value) {
                if (value != null && !regex.test(value.toString())) {
                    throw (0, error_js_1.createGraphQLError)(errorMessage(regex, value));
                }
                return value;
            },
            parseValue (value) {
                if (value != null && !regex.test(value === null || value === void 0 ? void 0 : value.toString())) {
                    throw (0, error_js_1.createGraphQLError)(errorMessage(regex, value));
                }
                return value;
            },
            parseLiteral (ast) {
                if (ast.kind === graphql_1.Kind.NULL) {
                    return null;
                }
                if (options.stringOnly && ast.kind !== graphql_1.Kind.STRING) {
                    throw (0, error_js_1.createGraphQLError)(`Can only validate strings as ${name} but got a: ${ast.kind}`);
                }
                if (!('value' in ast) || ast.kind === graphql_1.Kind.ENUM) {
                    throw (0, error_js_1.createGraphQLError)(`Can only validate primitive values as ${name} but got a: ${ast.kind}`, {
                        nodes: [
                            ast
                        ]
                    });
                }
                if (ast.value != null && !regex.test(ast.value.toString())) {
                    throw (0, error_js_1.createGraphQLError)(errorMessage(regex, ast.value), {
                        nodes: ast
                    });
                }
                return ast.value;
            },
            extensions: {
                codegenScalarType: options.stringOnly ? 'string' : 'string | number | boolean'
            }
        });
    }
}
exports.RegularExpression = RegularExpression;
}),
"[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/index.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONDefinition = exports.CurrencyDefinition = exports.USCurrencyDefinition = exports.RGBADefinition = exports.RGBDefinition = exports.PortDefinition = exports.MACDefinition = exports.LongitudeDefinition = exports.LatitudeDefinition = exports.JWTDefinition = exports.ISBNDefinition = exports.IPv6Definition = exports.IPv4Definition = exports.IPDefinition = exports.HSLADefinition = exports.HSLDefinition = exports.HexColorCodeDefinition = exports.HexadecimalTypeDefinition = exports.GUIDDefinition = exports.UUIDDefinition = exports.SafeIntDefinition = exports.LongTypeDefinition = exports.ByteTypeDefinition = exports.BigIntTypeDefinition = exports.URLTypeDefinition = exports.UnsignedIntTypeDefinition = exports.UnsignedFloatTypeDefinition = exports.PostalCodeTypeDefinition = exports.PositiveIntTypeDefinition = exports.PositiveFloatTypeDefinition = exports.PhoneNumberTypeDefinition = exports.NonPositiveIntTypeDefinition = exports.NonPositiveFloatTypeDefinition = exports.NonNegativeIntTypeDefinition = exports.NonNegativeFloatTypeDefinition = exports.NonEmptyStringTypeDefinition = exports.NegativeIntTypeDefinition = exports.NegativeFloatTypeDefinition = exports.EmailAddressTypeDefinition = exports.LocalEndTimeTypeDefinition = exports.LocalDateTimeTypeDefinition = exports.LocalTimeTypeDefinition = exports.LocalDateTypeDefinition = exports.UtcOffsetTypeDefinition = exports.TimeZoneTypeDefinition = exports.TimestampTypeDefinition = exports.DateTimeISOTypeDefinition = exports.DateTimeTypeDefinition = exports.TimeTypeDefinition = exports.DateTypeDefinition = void 0;
exports.UUIDResolver = exports.SafeIntResolver = exports.LongResolver = exports.ByteResolver = exports.BigIntResolver = exports.URLResolver = exports.UnsignedIntResolver = exports.UnsignedFloatResolver = exports.PostalCodeResolver = exports.PositiveIntResolver = exports.PositiveFloatResolver = exports.PhoneNumberResolver = exports.NonPositiveIntResolver = exports.NonPositiveFloatResolver = exports.NonNegativeIntResolver = exports.NonNegativeFloatResolver = exports.NonEmptyStringResolver = exports.NegativeIntResolver = exports.NegativeFloatResolver = exports.EmailAddressResolver = exports.LocalEndTimeResolver = exports.LocalDateTimeResolver = exports.LocalTimeResolver = exports.LocalDateResolver = exports.ISO8601DurationResolver = exports.DurationResolver = exports.UtcOffsetResolver = exports.TimeZoneResolver = exports.TimestampResolver = exports.DateTimeISOResolver = exports.DateTimeResolver = exports.TimeResolver = exports.DateResolver = exports.typeDefs = exports.IPCPatentDefinition = exports.LCCSubclassDefinition = exports.DeweyDecimalDefinition = exports.SESSNDefinition = exports.SemVerDefinition = exports.CuidDefinition = exports.AccountNumberDefinition = exports.RoutingNumberDefinition = exports.LocaleDefinition = exports.CountryCodeDefinition = exports.DurationTypeDefinition = exports.DIDDefinition = exports.VoidTypeDefinition = exports.ObjectIDTypeDefinition = exports.IBANTypeDefinition = exports.JSONObjectDefinition = void 0;
exports.NegativeIntMock = exports.NegativeFloatMock = exports.EmailAddressMock = exports.LocalEndTimeMock = exports.LocalDateTimeMock = exports.LocalTimeMock = exports.LocalDateMock = exports.UtcOffsetMock = exports.TimeZoneMock = exports.TimestampMock = exports.ISO8601DurationMock = exports.DurationMock = exports.DateTimeISOMock = exports.DateTimeMock = exports.TimeMock = exports.DateMock = exports.resolvers = exports.GraphQLIPCPatentResolver = exports.GraphQLDeweyDecimalResolver = exports.SESSNResolver = exports.SemVerResolver = exports.CuidResolver = exports.AccountNumberResolver = exports.RoutingNumberResolver = exports.LocaleResolver = exports.CountryCodeResolver = exports.DIDResolver = exports.VoidResolver = exports.ObjectIDResolver = exports.IBANResolver = exports.JSONObjectResolver = exports.JSONResolver = exports.CurrencyResolver = exports.USCurrencyResolver = exports.RGBAResolver = exports.RGBResolver = exports.PortResolver = exports.MACResolver = exports.LongitudeResolver = exports.LatitudeResolver = exports.JWTResolver = exports.ISBNResolver = exports.IPv6Resolver = exports.IPv4Resolver = exports.IPResolver = exports.HSLAResolver = exports.HSLResolver = exports.HexColorCodeResolver = exports.HexadecimalResolver = exports.GUIDResolver = void 0;
exports.LCCSubclassMock = exports.DeweyDecimalMock = exports.SESSNMock = exports.SemVerMock = exports.CuidMock = exports.AccountNumberMock = exports.RoutingNumberMock = exports.LocaleMock = exports.CountryCodeMock = exports.DIDMock = exports.VoidMock = exports.ObjectIDMock = exports.IBANMock = exports.JSONObjectMock = exports.JSONMock = exports.CurrencyMock = exports.USCurrencyMock = exports.RGBAMock = exports.RGBMock = exports.PortMock = exports.MACMock = exports.LongitudeMock = exports.LatitudeMock = exports.JWTMock = exports.ISBNMock = exports.IPv6Mock = exports.IPv4Mock = exports.IPMock = exports.HSLAMock = exports.HSLMock = exports.HexColorCodeMock = exports.HexadecimalMock = exports.GUIDMock = exports.UUIDMock = exports.SafeIntMock = exports.LongMock = exports.ByteMock = exports.BigIntMock = exports.URLMock = exports.UnsignedIntMock = exports.UnsignedFloatMock = exports.PostalCodeMock = exports.PositiveIntMock = exports.PositiveFloatMock = exports.PhoneNumberMock = exports.NonPositiveIntMock = exports.NonPositiveFloatMock = exports.NonNegativeIntMock = exports.NonNegativeFloatMock = exports.NonEmptyStringMock = void 0;
exports.GraphQLPort = exports.GraphQLMAC = exports.GraphQLLongitude = exports.GraphQLLatitude = exports.GraphQLJWT = exports.GraphQLISBN = exports.GraphQLIPv6 = exports.GraphQLIPv4 = exports.GraphQLIP = exports.GraphQLHSLA = exports.GraphQLHSL = exports.GraphQLHexColorCode = exports.GraphQLHexadecimal = exports.GraphQLGUID = exports.GraphQLUUID = exports.GraphQLSafeInt = exports.GraphQLLong = exports.GraphQLByte = exports.GraphQLBigInt = exports.GraphQLURL = exports.GraphQLUnsignedInt = exports.GraphQLUnsignedFloat = exports.GraphQLPostalCode = exports.GraphQLPositiveInt = exports.GraphQLPositiveFloat = exports.GraphQLPhoneNumber = exports.GraphQLNonPositiveInt = exports.GraphQLNonPositiveFloat = exports.GraphQLNonNegativeInt = exports.GraphQLNonNegativeFloat = exports.GraphQLNonEmptyString = exports.GraphQLNegativeInt = exports.GraphQLNegativeFloat = exports.GraphQLEmailAddress = exports.GraphQLLocalEndTime = exports.GraphQLLocalDateTime = exports.GraphQLLocalTime = exports.GraphQLLocalDate = exports.GraphQLISO8601Duration = exports.GraphQLDuration = exports.GraphQLUtcOffset = exports.GraphQLTimeZone = exports.GraphQLTimestamp = exports.GraphQLDateTimeISO = exports.GraphQLDateTime = exports.GraphQLTime = exports.GraphQLDate = exports.RegularExpression = exports.mocks = exports.IPCPatentMock = void 0;
exports.ULIDMock = exports.Cuid2Mock = exports.GeoJSONMock = exports.GraphQLULID = exports.GraphQLGeoJSON = exports.Cuid2Resolver = exports.ULIDResolver = exports.GeoJSONResolver = exports.CountryNameMock = exports.GraphQLCountryName = exports.CountryNameResolver = exports.Cuid2TypeDefinition = exports.ULIDTypeDefinition = exports.CountryNameTypeDefinition = exports.GeoJSONTypeDefinition = exports.GraphQLIPCPatent = exports.GraphQLLCCSubclass = exports.GraphQLDeweyDecimal = exports.GraphQLSESSN = exports.GraphQLSemVer = exports.GraphQLCuid = exports.GraphQLAccountNumber = exports.GraphQLRoutingNumber = exports.GraphQLLocale = exports.GraphQLCountryCode = exports.GraphQLDID = exports.GraphQLVoid = exports.GraphQLObjectID = exports.GraphQLIBAN = exports.GraphQLJSONObject = exports.GraphQLJSON = exports.GraphQLCurrency = exports.GraphQLUSCurrency = exports.GraphQLRGBA = exports.GraphQLRGB = void 0;
const mocks = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
exports.mocks = mocks;
const index_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/scalars/index.js [app-route] (ecmascript)");
Object.defineProperty(exports, "AccountNumberResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLAccountNumber;
    }
});
Object.defineProperty(exports, "GraphQLAccountNumber", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLAccountNumber;
    }
});
Object.defineProperty(exports, "BigIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLBigInt;
    }
});
Object.defineProperty(exports, "GraphQLBigInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLBigInt;
    }
});
Object.defineProperty(exports, "ByteResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLByte;
    }
});
Object.defineProperty(exports, "GraphQLByte", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLByte;
    }
});
Object.defineProperty(exports, "CountryCodeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCountryCode;
    }
});
Object.defineProperty(exports, "GraphQLCountryCode", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCountryCode;
    }
});
Object.defineProperty(exports, "CountryNameResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCountryName;
    }
});
Object.defineProperty(exports, "GraphQLCountryName", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCountryName;
    }
});
Object.defineProperty(exports, "CuidResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCuid;
    }
});
Object.defineProperty(exports, "GraphQLCuid", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCuid;
    }
});
Object.defineProperty(exports, "Cuid2Resolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCuid2;
    }
});
Object.defineProperty(exports, "CurrencyResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCurrency;
    }
});
Object.defineProperty(exports, "GraphQLCurrency", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLCurrency;
    }
});
Object.defineProperty(exports, "DateResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDate;
    }
});
Object.defineProperty(exports, "GraphQLDate", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDate;
    }
});
Object.defineProperty(exports, "DateTimeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDateTime;
    }
});
Object.defineProperty(exports, "GraphQLDateTime", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDateTime;
    }
});
Object.defineProperty(exports, "DateTimeISOResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDateTimeISO;
    }
});
Object.defineProperty(exports, "GraphQLDateTimeISO", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDateTimeISO;
    }
});
Object.defineProperty(exports, "GraphQLDeweyDecimalResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDeweyDecimal;
    }
});
Object.defineProperty(exports, "GraphQLDeweyDecimal", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDeweyDecimal;
    }
});
Object.defineProperty(exports, "DIDResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDID;
    }
});
Object.defineProperty(exports, "GraphQLDID", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDID;
    }
});
Object.defineProperty(exports, "DurationResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDuration;
    }
});
Object.defineProperty(exports, "GraphQLDuration", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLDuration;
    }
});
Object.defineProperty(exports, "EmailAddressResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLEmailAddress;
    }
});
Object.defineProperty(exports, "GraphQLEmailAddress", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLEmailAddress;
    }
});
Object.defineProperty(exports, "GeoJSONResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLGeoJSON;
    }
});
Object.defineProperty(exports, "GraphQLGeoJSON", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLGeoJSON;
    }
});
Object.defineProperty(exports, "GUIDResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLGUID;
    }
});
Object.defineProperty(exports, "GraphQLGUID", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLGUID;
    }
});
Object.defineProperty(exports, "HexadecimalResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHexadecimal;
    }
});
Object.defineProperty(exports, "GraphQLHexadecimal", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHexadecimal;
    }
});
Object.defineProperty(exports, "HexColorCodeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHexColorCode;
    }
});
Object.defineProperty(exports, "GraphQLHexColorCode", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHexColorCode;
    }
});
Object.defineProperty(exports, "HSLResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHSL;
    }
});
Object.defineProperty(exports, "GraphQLHSL", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHSL;
    }
});
Object.defineProperty(exports, "HSLAResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHSLA;
    }
});
Object.defineProperty(exports, "GraphQLHSLA", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLHSLA;
    }
});
Object.defineProperty(exports, "IBANResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIBAN;
    }
});
Object.defineProperty(exports, "GraphQLIBAN", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIBAN;
    }
});
Object.defineProperty(exports, "IPResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIP;
    }
});
Object.defineProperty(exports, "GraphQLIP", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIP;
    }
});
Object.defineProperty(exports, "GraphQLIPCPatentResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPCPatent;
    }
});
Object.defineProperty(exports, "GraphQLIPCPatent", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPCPatent;
    }
});
Object.defineProperty(exports, "IPv4Resolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPv4;
    }
});
Object.defineProperty(exports, "GraphQLIPv4", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPv4;
    }
});
Object.defineProperty(exports, "IPv6Resolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPv6;
    }
});
Object.defineProperty(exports, "GraphQLIPv6", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLIPv6;
    }
});
Object.defineProperty(exports, "ISBNResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLISBN;
    }
});
Object.defineProperty(exports, "GraphQLISBN", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLISBN;
    }
});
Object.defineProperty(exports, "ISO8601DurationResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLISO8601Duration;
    }
});
Object.defineProperty(exports, "GraphQLISO8601Duration", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLISO8601Duration;
    }
});
Object.defineProperty(exports, "JSONResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJSON;
    }
});
Object.defineProperty(exports, "GraphQLJSON", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJSON;
    }
});
Object.defineProperty(exports, "JSONObjectResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJSONObject;
    }
});
Object.defineProperty(exports, "GraphQLJSONObject", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJSONObject;
    }
});
Object.defineProperty(exports, "JWTResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJWT;
    }
});
Object.defineProperty(exports, "GraphQLJWT", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLJWT;
    }
});
Object.defineProperty(exports, "LatitudeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLatitude;
    }
});
Object.defineProperty(exports, "GraphQLLatitude", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLatitude;
    }
});
Object.defineProperty(exports, "GraphQLLCCSubclass", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLCCSubclass;
    }
});
Object.defineProperty(exports, "LocalDateResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalDate;
    }
});
Object.defineProperty(exports, "GraphQLLocalDate", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalDate;
    }
});
Object.defineProperty(exports, "LocalDateTimeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalDateTime;
    }
});
Object.defineProperty(exports, "GraphQLLocalDateTime", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalDateTime;
    }
});
Object.defineProperty(exports, "LocaleResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocale;
    }
});
Object.defineProperty(exports, "GraphQLLocale", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocale;
    }
});
Object.defineProperty(exports, "LocalEndTimeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalEndTime;
    }
});
Object.defineProperty(exports, "GraphQLLocalEndTime", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalEndTime;
    }
});
Object.defineProperty(exports, "LocalTimeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalTime;
    }
});
Object.defineProperty(exports, "GraphQLLocalTime", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLocalTime;
    }
});
Object.defineProperty(exports, "LongResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLong;
    }
});
Object.defineProperty(exports, "GraphQLLong", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLong;
    }
});
Object.defineProperty(exports, "LongitudeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLongitude;
    }
});
Object.defineProperty(exports, "GraphQLLongitude", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLLongitude;
    }
});
Object.defineProperty(exports, "MACResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLMAC;
    }
});
Object.defineProperty(exports, "GraphQLMAC", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLMAC;
    }
});
Object.defineProperty(exports, "NegativeFloatResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNegativeFloat;
    }
});
Object.defineProperty(exports, "GraphQLNegativeFloat", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNegativeFloat;
    }
});
Object.defineProperty(exports, "NegativeIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNegativeInt;
    }
});
Object.defineProperty(exports, "GraphQLNegativeInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNegativeInt;
    }
});
Object.defineProperty(exports, "NonEmptyStringResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonEmptyString;
    }
});
Object.defineProperty(exports, "GraphQLNonEmptyString", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonEmptyString;
    }
});
Object.defineProperty(exports, "NonNegativeFloatResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonNegativeFloat;
    }
});
Object.defineProperty(exports, "GraphQLNonNegativeFloat", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonNegativeFloat;
    }
});
Object.defineProperty(exports, "NonNegativeIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonNegativeInt;
    }
});
Object.defineProperty(exports, "GraphQLNonNegativeInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonNegativeInt;
    }
});
Object.defineProperty(exports, "NonPositiveFloatResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonPositiveFloat;
    }
});
Object.defineProperty(exports, "GraphQLNonPositiveFloat", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonPositiveFloat;
    }
});
Object.defineProperty(exports, "NonPositiveIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonPositiveInt;
    }
});
Object.defineProperty(exports, "GraphQLNonPositiveInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLNonPositiveInt;
    }
});
Object.defineProperty(exports, "ObjectIDResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLObjectID;
    }
});
Object.defineProperty(exports, "GraphQLObjectID", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLObjectID;
    }
});
Object.defineProperty(exports, "PhoneNumberResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPhoneNumber;
    }
});
Object.defineProperty(exports, "GraphQLPhoneNumber", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPhoneNumber;
    }
});
Object.defineProperty(exports, "PortResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPort;
    }
});
Object.defineProperty(exports, "GraphQLPort", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPort;
    }
});
Object.defineProperty(exports, "PositiveFloatResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPositiveFloat;
    }
});
Object.defineProperty(exports, "GraphQLPositiveFloat", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPositiveFloat;
    }
});
Object.defineProperty(exports, "PositiveIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPositiveInt;
    }
});
Object.defineProperty(exports, "GraphQLPositiveInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPositiveInt;
    }
});
Object.defineProperty(exports, "PostalCodeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPostalCode;
    }
});
Object.defineProperty(exports, "GraphQLPostalCode", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLPostalCode;
    }
});
Object.defineProperty(exports, "RGBResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRGB;
    }
});
Object.defineProperty(exports, "GraphQLRGB", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRGB;
    }
});
Object.defineProperty(exports, "RGBAResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRGBA;
    }
});
Object.defineProperty(exports, "GraphQLRGBA", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRGBA;
    }
});
Object.defineProperty(exports, "RoutingNumberResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRoutingNumber;
    }
});
Object.defineProperty(exports, "GraphQLRoutingNumber", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLRoutingNumber;
    }
});
Object.defineProperty(exports, "SafeIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSafeInt;
    }
});
Object.defineProperty(exports, "GraphQLSafeInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSafeInt;
    }
});
Object.defineProperty(exports, "SemVerResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSemVer;
    }
});
Object.defineProperty(exports, "GraphQLSemVer", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSemVer;
    }
});
Object.defineProperty(exports, "SESSNResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSESSN;
    }
});
Object.defineProperty(exports, "GraphQLSESSN", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLSESSN;
    }
});
Object.defineProperty(exports, "TimeResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTime;
    }
});
Object.defineProperty(exports, "GraphQLTime", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTime;
    }
});
Object.defineProperty(exports, "TimestampResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTimestamp;
    }
});
Object.defineProperty(exports, "GraphQLTimestamp", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTimestamp;
    }
});
Object.defineProperty(exports, "TimeZoneResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTimeZone;
    }
});
Object.defineProperty(exports, "GraphQLTimeZone", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLTimeZone;
    }
});
Object.defineProperty(exports, "ULIDResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLULID;
    }
});
Object.defineProperty(exports, "GraphQLULID", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLULID;
    }
});
Object.defineProperty(exports, "UnsignedFloatResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUnsignedFloat;
    }
});
Object.defineProperty(exports, "GraphQLUnsignedFloat", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUnsignedFloat;
    }
});
Object.defineProperty(exports, "UnsignedIntResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUnsignedInt;
    }
});
Object.defineProperty(exports, "GraphQLUnsignedInt", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUnsignedInt;
    }
});
Object.defineProperty(exports, "URLResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLURL;
    }
});
Object.defineProperty(exports, "GraphQLURL", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLURL;
    }
});
Object.defineProperty(exports, "USCurrencyResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUSCurrency;
    }
});
Object.defineProperty(exports, "GraphQLUSCurrency", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUSCurrency;
    }
});
Object.defineProperty(exports, "UtcOffsetResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUtcOffset;
    }
});
Object.defineProperty(exports, "GraphQLUtcOffset", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUtcOffset;
    }
});
Object.defineProperty(exports, "UUIDResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUUID;
    }
});
Object.defineProperty(exports, "GraphQLUUID", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLUUID;
    }
});
Object.defineProperty(exports, "VoidResolver", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLVoid;
    }
});
Object.defineProperty(exports, "GraphQLVoid", {
    enumerable: true,
    get: function() {
        return index_js_1.GraphQLVoid;
    }
});
var typeDefs_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "DateTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Date;
    }
});
Object.defineProperty(exports, "TimeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Time;
    }
});
Object.defineProperty(exports, "DateTimeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.DateTime;
    }
});
Object.defineProperty(exports, "DateTimeISOTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.DateTimeISO;
    }
});
Object.defineProperty(exports, "TimestampTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Timestamp;
    }
});
Object.defineProperty(exports, "TimeZoneTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.TimeZone;
    }
});
Object.defineProperty(exports, "UtcOffsetTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.UtcOffset;
    }
});
Object.defineProperty(exports, "LocalDateTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.LocalDate;
    }
});
Object.defineProperty(exports, "LocalTimeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.LocalTime;
    }
});
Object.defineProperty(exports, "LocalDateTimeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.LocalDateTime;
    }
});
Object.defineProperty(exports, "LocalEndTimeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.LocalEndTime;
    }
});
Object.defineProperty(exports, "EmailAddressTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.EmailAddress;
    }
});
Object.defineProperty(exports, "NegativeFloatTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NegativeFloat;
    }
});
Object.defineProperty(exports, "NegativeIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NegativeInt;
    }
});
Object.defineProperty(exports, "NonEmptyStringTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NonEmptyString;
    }
});
Object.defineProperty(exports, "NonNegativeFloatTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NonNegativeFloat;
    }
});
Object.defineProperty(exports, "NonNegativeIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NonNegativeInt;
    }
});
Object.defineProperty(exports, "NonPositiveFloatTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NonPositiveFloat;
    }
});
Object.defineProperty(exports, "NonPositiveIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.NonPositiveInt;
    }
});
Object.defineProperty(exports, "PhoneNumberTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.PhoneNumber;
    }
});
Object.defineProperty(exports, "PositiveFloatTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.PositiveFloat;
    }
});
Object.defineProperty(exports, "PositiveIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.PositiveInt;
    }
});
Object.defineProperty(exports, "PostalCodeTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.PostalCode;
    }
});
Object.defineProperty(exports, "UnsignedFloatTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.UnsignedFloat;
    }
});
Object.defineProperty(exports, "UnsignedIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.UnsignedInt;
    }
});
Object.defineProperty(exports, "URLTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.URL;
    }
});
Object.defineProperty(exports, "BigIntTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.BigInt;
    }
});
Object.defineProperty(exports, "ByteTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Byte;
    }
});
Object.defineProperty(exports, "LongTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Long;
    }
});
Object.defineProperty(exports, "SafeIntDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.SafeInt;
    }
});
Object.defineProperty(exports, "UUIDDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.UUID;
    }
});
Object.defineProperty(exports, "GUIDDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.GUID;
    }
});
Object.defineProperty(exports, "HexadecimalTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Hexadecimal;
    }
});
Object.defineProperty(exports, "HexColorCodeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.HexColorCode;
    }
});
Object.defineProperty(exports, "HSLDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.HSL;
    }
});
Object.defineProperty(exports, "HSLADefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.HSLA;
    }
});
Object.defineProperty(exports, "IPDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.IP;
    }
});
Object.defineProperty(exports, "IPv4Definition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.IPv4;
    }
});
Object.defineProperty(exports, "IPv6Definition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.IPv6;
    }
});
Object.defineProperty(exports, "ISBNDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.ISBN;
    }
});
Object.defineProperty(exports, "JWTDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.JWT;
    }
});
Object.defineProperty(exports, "LatitudeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Latitude;
    }
});
Object.defineProperty(exports, "LongitudeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Longitude;
    }
});
Object.defineProperty(exports, "MACDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.MAC;
    }
});
Object.defineProperty(exports, "PortDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Port;
    }
});
Object.defineProperty(exports, "RGBDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.RGB;
    }
});
Object.defineProperty(exports, "RGBADefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.RGBA;
    }
});
Object.defineProperty(exports, "USCurrencyDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.USCurrency;
    }
});
Object.defineProperty(exports, "CurrencyDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Currency;
    }
});
Object.defineProperty(exports, "JSONDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.JSON;
    }
});
Object.defineProperty(exports, "JSONObjectDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.JSONObject;
    }
});
Object.defineProperty(exports, "IBANTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.IBAN;
    }
});
Object.defineProperty(exports, "ObjectIDTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.ObjectID;
    }
});
Object.defineProperty(exports, "VoidTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Void;
    }
});
Object.defineProperty(exports, "DIDDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.DID;
    }
});
Object.defineProperty(exports, "DurationTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Duration;
    }
});
Object.defineProperty(exports, "CountryCodeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.CountryCode;
    }
});
Object.defineProperty(exports, "LocaleDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Locale;
    }
});
Object.defineProperty(exports, "RoutingNumberDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.RoutingNumber;
    }
});
Object.defineProperty(exports, "AccountNumberDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.AccountNumber;
    }
});
Object.defineProperty(exports, "CuidDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.Cuid;
    }
});
Object.defineProperty(exports, "SemVerDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.SemVer;
    }
});
Object.defineProperty(exports, "SESSNDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.SemVer;
    }
});
Object.defineProperty(exports, "DeweyDecimalDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.DeweyDecimal;
    }
});
Object.defineProperty(exports, "LCCSubclassDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.LCCSubclass;
    }
});
Object.defineProperty(exports, "IPCPatentDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_1.IPCPatent;
    }
});
var typeDefs_js_2 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "typeDefs", {
    enumerable: true,
    get: function() {
        return typeDefs_js_2.typeDefs;
    }
});
exports.resolvers = {
    AccountNumber: index_js_1.GraphQLAccountNumber,
    BigInt: index_js_1.GraphQLBigInt,
    Byte: index_js_1.GraphQLByte,
    CountryCode: index_js_1.GraphQLCountryCode,
    CountryName: index_js_1.GraphQLCountryName,
    Cuid: index_js_1.GraphQLCuid,
    Cuid2: index_js_1.GraphQLCuid2,
    Currency: index_js_1.GraphQLCurrency,
    Date: index_js_1.GraphQLDate,
    DateTime: index_js_1.GraphQLDateTime,
    DateTimeISO: index_js_1.GraphQLDateTimeISO,
    DeweyDecimal: index_js_1.GraphQLDeweyDecimal,
    DID: index_js_1.GraphQLDID,
    Duration: index_js_1.GraphQLDuration,
    EmailAddress: index_js_1.GraphQLEmailAddress,
    GeoJSON: index_js_1.GraphQLGeoJSON,
    GUID: index_js_1.GraphQLGUID,
    Hexadecimal: index_js_1.GraphQLHexadecimal,
    HexColorCode: index_js_1.GraphQLHexColorCode,
    HSL: index_js_1.GraphQLHSL,
    HSLA: index_js_1.GraphQLHSLA,
    IBAN: index_js_1.GraphQLIBAN,
    IP: index_js_1.GraphQLIP,
    IPCPatent: index_js_1.GraphQLIPCPatent,
    IPv4: index_js_1.GraphQLIPv4,
    IPv6: index_js_1.GraphQLIPv6,
    ISBN: index_js_1.GraphQLISBN,
    ISO8601Duration: index_js_1.GraphQLISO8601Duration,
    JSON: index_js_1.GraphQLJSON,
    JSONObject: index_js_1.GraphQLJSONObject,
    JWT: index_js_1.GraphQLJWT,
    Latitude: index_js_1.GraphQLLatitude,
    LCCSubclass: index_js_1.GraphQLLCCSubclass,
    LocalDate: index_js_1.GraphQLLocalDate,
    LocalDateTime: index_js_1.GraphQLLocalDateTime,
    Locale: index_js_1.GraphQLLocale,
    LocalEndTime: index_js_1.GraphQLLocalEndTime,
    LocalTime: index_js_1.GraphQLLocalTime,
    Long: index_js_1.GraphQLLong,
    Longitude: index_js_1.GraphQLLongitude,
    MAC: index_js_1.GraphQLMAC,
    NegativeFloat: index_js_1.GraphQLNegativeFloat,
    NegativeInt: index_js_1.GraphQLNegativeInt,
    NonEmptyString: index_js_1.GraphQLNonEmptyString,
    NonNegativeFloat: index_js_1.GraphQLNonNegativeFloat,
    NonNegativeInt: index_js_1.GraphQLNonNegativeInt,
    NonPositiveFloat: index_js_1.GraphQLNonPositiveFloat,
    NonPositiveInt: index_js_1.GraphQLNonPositiveInt,
    ObjectID: index_js_1.GraphQLObjectID,
    PhoneNumber: index_js_1.GraphQLPhoneNumber,
    Port: index_js_1.GraphQLPort,
    PositiveFloat: index_js_1.GraphQLPositiveFloat,
    PositiveInt: index_js_1.GraphQLPositiveInt,
    PostalCode: index_js_1.GraphQLPostalCode,
    RGB: index_js_1.GraphQLRGB,
    RGBA: index_js_1.GraphQLRGBA,
    RoutingNumber: index_js_1.GraphQLRoutingNumber,
    SafeInt: index_js_1.GraphQLSafeInt,
    SemVer: index_js_1.GraphQLSemVer,
    SESSN: index_js_1.GraphQLSESSN,
    Time: index_js_1.GraphQLTime,
    Timestamp: index_js_1.GraphQLTimestamp,
    TimeZone: index_js_1.GraphQLTimeZone,
    ULID: index_js_1.GraphQLULID,
    UnsignedFloat: index_js_1.GraphQLUnsignedFloat,
    UnsignedInt: index_js_1.GraphQLUnsignedInt,
    URL: index_js_1.GraphQLURL,
    USCurrency: index_js_1.GraphQLUSCurrency,
    UtcOffset: index_js_1.GraphQLUtcOffset,
    UUID: index_js_1.GraphQLUUID,
    Void: index_js_1.GraphQLVoid
};
var mocks_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
Object.defineProperty(exports, "DateMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Date;
    }
});
Object.defineProperty(exports, "TimeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Time;
    }
});
Object.defineProperty(exports, "DateTimeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.DateTime;
    }
});
Object.defineProperty(exports, "DateTimeISOMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.DateTimeISO;
    }
});
Object.defineProperty(exports, "DurationMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Duration;
    }
});
Object.defineProperty(exports, "ISO8601DurationMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.ISO8601Duration;
    }
});
Object.defineProperty(exports, "TimestampMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Timestamp;
    }
});
Object.defineProperty(exports, "TimeZoneMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.TimeZone;
    }
});
Object.defineProperty(exports, "UtcOffsetMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.UtcOffset;
    }
});
Object.defineProperty(exports, "LocalDateMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.LocalDate;
    }
});
Object.defineProperty(exports, "LocalTimeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.LocalTime;
    }
});
Object.defineProperty(exports, "LocalDateTimeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.LocalDateTime;
    }
});
Object.defineProperty(exports, "LocalEndTimeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.LocalEndTime;
    }
});
Object.defineProperty(exports, "EmailAddressMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.EmailAddress;
    }
});
Object.defineProperty(exports, "NegativeFloatMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NegativeFloat;
    }
});
Object.defineProperty(exports, "NegativeIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NegativeInt;
    }
});
Object.defineProperty(exports, "NonEmptyStringMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NonEmptyString;
    }
});
Object.defineProperty(exports, "NonNegativeFloatMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NonNegativeFloat;
    }
});
Object.defineProperty(exports, "NonNegativeIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NonNegativeInt;
    }
});
Object.defineProperty(exports, "NonPositiveFloatMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NonPositiveFloat;
    }
});
Object.defineProperty(exports, "NonPositiveIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.NonPositiveInt;
    }
});
Object.defineProperty(exports, "PhoneNumberMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.PhoneNumber;
    }
});
Object.defineProperty(exports, "PositiveFloatMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.PositiveFloat;
    }
});
Object.defineProperty(exports, "PositiveIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.PositiveInt;
    }
});
Object.defineProperty(exports, "PostalCodeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.PostalCode;
    }
});
Object.defineProperty(exports, "UnsignedFloatMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.UnsignedFloat;
    }
});
Object.defineProperty(exports, "UnsignedIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.UnsignedInt;
    }
});
Object.defineProperty(exports, "URLMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.URL;
    }
});
Object.defineProperty(exports, "BigIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.BigInt;
    }
});
Object.defineProperty(exports, "ByteMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Byte;
    }
});
Object.defineProperty(exports, "LongMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Long;
    }
});
Object.defineProperty(exports, "SafeIntMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.SafeInt;
    }
});
Object.defineProperty(exports, "UUIDMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.UUID;
    }
});
Object.defineProperty(exports, "GUIDMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.GUID;
    }
});
Object.defineProperty(exports, "HexadecimalMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Hexadecimal;
    }
});
Object.defineProperty(exports, "HexColorCodeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.HexColorCode;
    }
});
Object.defineProperty(exports, "HSLMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.HSL;
    }
});
Object.defineProperty(exports, "HSLAMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.HSLA;
    }
});
Object.defineProperty(exports, "IPMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.IP;
    }
});
Object.defineProperty(exports, "IPv4Mock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.IPv4;
    }
});
Object.defineProperty(exports, "IPv6Mock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.IPv6;
    }
});
Object.defineProperty(exports, "ISBNMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.ISBN;
    }
});
Object.defineProperty(exports, "JWTMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.JWT;
    }
});
Object.defineProperty(exports, "LatitudeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Latitude;
    }
});
Object.defineProperty(exports, "LongitudeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Longitude;
    }
});
Object.defineProperty(exports, "MACMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.MAC;
    }
});
Object.defineProperty(exports, "PortMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Port;
    }
});
Object.defineProperty(exports, "RGBMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.RGB;
    }
});
Object.defineProperty(exports, "RGBAMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.RGBA;
    }
});
Object.defineProperty(exports, "USCurrencyMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.USCurrency;
    }
});
Object.defineProperty(exports, "CurrencyMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Currency;
    }
});
Object.defineProperty(exports, "JSONMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.JSON;
    }
});
Object.defineProperty(exports, "JSONObjectMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.JSONObject;
    }
});
Object.defineProperty(exports, "IBANMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.IBAN;
    }
});
Object.defineProperty(exports, "ObjectIDMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.ObjectID;
    }
});
Object.defineProperty(exports, "VoidMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Void;
    }
});
Object.defineProperty(exports, "DIDMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.DID;
    }
});
Object.defineProperty(exports, "CountryCodeMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.CountryCode;
    }
});
Object.defineProperty(exports, "LocaleMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Locale;
    }
});
Object.defineProperty(exports, "RoutingNumberMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.RoutingNumber;
    }
});
Object.defineProperty(exports, "AccountNumberMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.AccountNumber;
    }
});
Object.defineProperty(exports, "CuidMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.Cuid;
    }
});
Object.defineProperty(exports, "SemVerMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.SemVer;
    }
});
Object.defineProperty(exports, "SESSNMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.SESSN;
    }
});
Object.defineProperty(exports, "DeweyDecimalMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.DeweyDecimal;
    }
});
Object.defineProperty(exports, "LCCSubclassMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.LCCSubclass;
    }
});
Object.defineProperty(exports, "IPCPatentMock", {
    enumerable: true,
    get: function() {
        return mocks_js_1.IPCPatent;
    }
});
var RegularExpression_js_1 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/RegularExpression.js [app-route] (ecmascript)");
Object.defineProperty(exports, "RegularExpression", {
    enumerable: true,
    get: function() {
        return RegularExpression_js_1.RegularExpression;
    }
});
var typeDefs_js_3 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GeoJSONTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_3.GeoJSON;
    }
});
var typeDefs_js_4 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "CountryNameTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_4.CountryName;
    }
});
var typeDefs_js_5 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "ULIDTypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_5.ULID;
    }
});
var typeDefs_js_6 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/typeDefs.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Cuid2TypeDefinition", {
    enumerable: true,
    get: function() {
        return typeDefs_js_6.Cuid2;
    }
});
var mocks_js_2 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
Object.defineProperty(exports, "CountryNameMock", {
    enumerable: true,
    get: function() {
        return mocks_js_2.CountryName;
    }
});
var mocks_js_3 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
Object.defineProperty(exports, "GeoJSONMock", {
    enumerable: true,
    get: function() {
        return mocks_js_3.GeoJSON;
    }
});
var mocks_js_4 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
Object.defineProperty(exports, "Cuid2Mock", {
    enumerable: true,
    get: function() {
        return mocks_js_4.Cuid2;
    }
});
var mocks_js_5 = __turbopack_context__.r("[project]/node_modules/.bun/graphql-scalars@1.25.0+2e36366335d68c76/node_modules/graphql-scalars/cjs/mocks.js [app-route] (ecmascript)");
Object.defineProperty(exports, "ULIDMock", {
    enumerable: true,
    get: function() {
        return mocks_js_5.ULID;
    }
});
}),
];

//# sourceMappingURL=340cf_graphql-scalars_cjs_7cf64f1f._.js.map