export class NewsCreateDto {
  readonly newsName: string;
  readonly filePath: string;

  constructor(newsName,filePath){
    this.filePath= filePath
    this.newsName = newsName
  }
}