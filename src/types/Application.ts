export type application_Status = "Applied" | "Pending" | "offer" | "Rejected";
export interface Application {
  id: number;
  //userId: number;
  campany_name: string;
  job_title: string;
  status: application_Status;
  applied_at: Date;
  //notes?: string;
}
export type NewApplication = Omit<Application, "id" | "applied_at">;
export type UpdateApplication = Pick<Application, "status">;
