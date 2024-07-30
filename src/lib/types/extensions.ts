export interface IExtension {
  id: number;
  name: string;
  description: string;
  description_ru?: string;
  description_en?: string;
  link: string;
}

export interface IExtensionPartial {
  name?: string;
  description?: string;
  description_ru?: string;
  description_en?: string;
  link?: string;
}
