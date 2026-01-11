export interface Location {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
  background: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  assetId: string;
  imageId: string;
  thumbnailId: string;
  quantity: number;
  purchasePrice: number;
  insured: boolean;
  archived: boolean;
  location: Location;
  labels: Label[];
  createdAt: string;
  updatedAt: string;
  soldTime: string | null;
}

// src/types/inventory.ts

// export interface Location {
//   id: string;
//   name: string;
//   description?: string;
//   createdAt: string;
//   updatedAt: string;
//   parent?: string;
// }

// export interface Label {
//   id: string;
//   name: string;
//   color: string;
//   description?: string;
//   createdAt: string;
//   updatedAt: string;
// }

export interface CustomField {
  id: string;
  name: string;
  type: "text" | "number" | "boolean" | "date";
  textValue?: string | null;
  numberValue?: number | null;
  booleanValue?: boolean | null;
  timeValue?: string | null;
}

export interface Attachment {
  id: string;
  title: string;
  type: string;
  mimeType: string;
  path: string;
  primary: boolean;
  createdAt: string;
  updatedAt: string;
  thumbnail?: {
    id: string;
    path: string;
    mime_type: string;
    title: string;
  };
}

export interface ItemDetail {
  id: string;
  name: string;
  description?: string;
  assetId?: string;
  imageId?: string;
  thumbnailId?: string;
  notes?: string;
  quantity: number;

  // Financials
  purchasePrice: number;
  purchaseFrom?: string;
  purchaseTime?: string;

  // Manufacturer Info
  manufacturer?: string;
  modelNumber?: string;
  serialNumber?: string;

  // Status & Warranty
  insured: boolean;
  archived: boolean;
  lifetimeWarranty: boolean;
  warrantyDetails?: string;
  warrantyExpires?: string;

  // Relationships
  location: Location;
  labels: Label[];
  fields: CustomField[];
  attachments: Attachment[];

  // Dates
  createdAt: string;
  updatedAt: string;
  soldTo?: string;
  soldPrice?: number;
  soldTime?: string;
  soldNotes?: string;
}
