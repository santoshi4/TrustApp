using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TrustApp.Models;
using TrustApp.Repository;

namespace TrustApp
{
    public class LoginController : ApiController
    {
        public int Login([FromBody]Login userdetails)
        { 
            string resultant=string.Empty;
            try
            {
                resultant=LoginRep.validateUser(userdetails);
                if(resultant=="Login Successful")
                {
                    return 1;
                }
                return 0;
                              
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}