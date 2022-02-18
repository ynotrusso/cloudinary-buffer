/// <reference types="multer" />
interface options {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
    folder: string;
}
export default function uploadFile(config: options, file: Express.Multer.File): Promise<string>;