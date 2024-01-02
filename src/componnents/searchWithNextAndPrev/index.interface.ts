export interface PaginationDataEnterModel {
  paginationData: PaginationDataModel;
  setPaginationData: React.Dispatch<React.SetStateAction<PaginationDataModel>>;
  setSearchClicked: React.Dispatch<React.SetStateAction<boolean>>;
  disabled?: boolean;
}
export interface PaginationDataModel {
  next: string | null;
  prev: string | null;
  current: string | null;
  masterId: number;
}
