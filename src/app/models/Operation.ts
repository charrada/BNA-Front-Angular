export class operation {
  idOperation: number;
  montant: number;
  idAgent: number;
  dateF: Date;
  imageUrl: string;
  typeOperation:string;
  credit: {
    idCredit: number;
  };
  typePaiementOperation: {
    idType: number;
    nomType: string;
  };


    numC: number;
  

 
    ribV: number;
  
    detailsOperation: {
      idDetails:number;
      typeDetails:string;
      numPieceEnregistrement:number;
      typePieceEnregistrement:string;
      typeTimbrage:string;
      numAffaireAuxiliaire:number;
      idAuxOperation:number;

    };


}
