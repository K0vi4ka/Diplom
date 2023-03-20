export class CreatePublicationCommentDto{
  readonly commentId: number;
  readonly publicId: number;

  constructor(commentsId,publicationId){
    this.commentId = commentsId;
    this.publicId = publicationId
  }
}