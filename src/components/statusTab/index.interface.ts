export interface Status {
   label: string;
   isActive: boolean;
   icon: string;
}

export interface Props {
   statuses: Status[];
   onClick: (clickedStatus: Status) => void;
}
