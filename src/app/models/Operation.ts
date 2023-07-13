export class operation {
  idOperation: number;
  montant: number;
  idAgent: number;
  dateF: Date;
  imageUrl: string;
  typeOperation:string;
  etatOperation:string;

  credit: {
    idCredit: number;
    montant:number;
    debiteur:{
      idDebiteur:number;
      nom:string;
      prenom:string;
    }
  };
  typePaiementOperation: {
    idType: number;
    nomType: string;
  };


    numC: number;
    vu:number;
  

 
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
