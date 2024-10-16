export interface Status {
   label: string;
   isActive: boolean;
   icon: string;
}

export interface Props {
   statuses: Status[];
   title: string;
   onClick?: (clickedStatus: Status) => void;
}
