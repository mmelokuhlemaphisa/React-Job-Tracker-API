import { query } from "../config/database";
import { Application, NewApplication } from "../types/Application";
//create new application
export const createApplication = async (
  appData: NewApplication
): Promise<Application> => {
  const { campany_name, job_title, status } = appData;
  const { rows } = await query(
    "INSERT INTO application (campany_name, job_title, status) VALUES ($1, $2, $3) RETURNING *",
    [campany_name, job_title, status]
  );
  return rows[0];
};


export const findAllApplications = async (): Promise<Application[]> => {

    const { rows } = await query("SELECT * FROM application ORDER BY applied_at DESC"
    );
    return rows;
};

export const findApplicationById = async (id: number): Promise<Application | null> => {
    const { rows } = await query("SELECT * FROM application WHERE id = $1", [id]);
    return rows[0] || null;
};