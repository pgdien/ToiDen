using CMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace CMS.Controllers
{
    public class HomeController : Controller
    {
        private CMSnewEntities db = new CMSnewEntities();
        [Route]
        public ActionResult Index()
        {
            return View();
        }

        [Route("tac-dung-cua-toi-den")]
        public ActionResult TacDung()
        {
            return View();
        }
    }
}
