export  class SearchGridResult
{
      TWID:number ; //linked_member palmid for clienthomeowner search
      EncryptedTWID:string; //linked_member palmid for clienthomeowner search
      RecordId :number;
      DateofLastActivity:string ;
      Name :string;
      PreferredPhone:string;
      BusinessCategory :string;
      RFMSBusinessCategory :string;
      LastPurchaseDate :string;
      TotalSalesLast12Months :number;
      AccountManager :string;
      ProfileLink :string;
      ColorCode :string;
      PMFlag:string ;
      VerificationDetails :string;
      DistancetoShowroom :string;
      Email :string;
      ClientHomeOwnerPALMID :string;
      EncryptedClientHomeOwnerPALMID :string;
      MemberAssignedTO :string;
      LinkedMemberPALMID:string;
      ActivityType :string;
      DueDate :string;
      BusinessName :string;
      BusinessPhone :string;
      HomePhone :string;
      CellPhone :string;
      Fax :string;
      PalmEmail:string;
      Address :string;
      State :string;
      City :string;
      Zip :string;
      ProFMSNo :string;
      CreatedDate :string;
      Showroom :string;
      Status :string;
      TargetList:string;
      PEID :string;
      EstShareOfWallet:number;
      DigitalMemAccepted :string;
      AssociatedContactName:string;
      AssociatedContactNameDetails :string;
      LinkedMember :string;
      Remarks :string;
      AssignedAMPEID :string;
      CustomerStatusId:number;  // 0:Inactive / Delete. 1:Active. 2:Converted
      CreatedBy:string;
      FirstName: string ;
      LastName: string ;
      PersonNumber: string;
      CompletedDate: string ;
      FBCUserName: string ;
      OwnerName: string ;
      ActivityFlag: string ;
      EcommerceEnabled: string ;
     MemberName: string ;
     MemberPhoneNo: string ;
     ClientName: string ;
     ClientPhoneNo: string ;
     EstimateNo: string ;
     SideMark: string ;
     QuoteTotal: number ;
     ExternalNotes: string;
     InternalNotes: string;
     SampleCheckOut: string ;
     LastActivityDate: string ;
     QuoteCreatedDate: string ;
     RFMSLastUpdated: string 
     FollowUpDate: string ;
     QuoteStatus: number ;
     AddTeamsPe_Id: number ;
     PalmID: number ;
     Activity_id: number ;
     EncryptedPALMID: string ;
     ProStatus: string; 
     IsAppLogin: string ;
     TotalSales_last_12Months: string ;
     MemberRank: string ;
     salestrendType: string ;
     clientPALMID: number;
     EncryptedClientPALMID: string ;
     IsRelatedQuotes: boolean;
     Showroom_Id: number ;
     RelatedQuotes: string ;
     SalesTracking: string ;
     VisitTracking: string ;
     Invoice: string ;
     OrderDate: string ;
     DeliveryDate: string ;
     Profit: number ;
     LineTotal: number ;
     LineNumber: string ;
     SalesTotal: number ;
    
}
export  class SearchResult{
    SearchGridResultDTO: SearchGridResult[];
}
