export type Application = "applied" | "pending" | "rejected" | "offer";

 export interface IApplication {
   id: number;
   company_name: string;
   job_title: string;
   status: Application;
   applied_at: Date;
 }

 export type NewApplication = Omit<IApplication, "id" | "applied_at">;
 export type updateApplication = Pick<IApplication, "status">;