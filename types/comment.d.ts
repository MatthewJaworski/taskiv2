export type TCommentRequest = {
  content: string;
  userId: string;
  type: string
  typeId: string;
}
export type TComment ={
  id:string
  content:string
  fullName:string
  createDate:string
}