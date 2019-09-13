using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using TrustApp.Models;
using System.Configuration;

namespace TrustApp.Repository
{
    public class LoginRep
    {
        public static string validateUser(Login details)
        {
            int status = 0;
            string IsValidate = string.Empty;
            try
            {
                string constr = ConfigurationManager.ConnectionStrings["ConString"].ConnectionString;

                using (SqlConnection con = new SqlConnection(constr))
                {
                    using (SqlCommand cmd = new SqlCommand())
                    {

                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.CommandText = "sp_login";
                        cmd.Parameters.AddWithValue("@UserId", details.username);
                        cmd.Parameters.AddWithValue("@Password", details.password);
                        cmd.Connection = con;
                        con.Open();
                        status = Convert.ToInt32(cmd.ExecuteScalar());
                        con.Close();
                        if (status == 1)

                        {

                            IsValidate = "Login Successful";

                        }

                        else

                        {

                            IsValidate = "Invalid UserName and Password...";

                        }
                    }
                }
                return IsValidate ;

            }
            catch (Exception ex)
            {
                return IsValidate;
            }
        }

    }
}