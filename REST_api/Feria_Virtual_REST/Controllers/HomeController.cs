﻿using System.Web.Mvc;

namespace Feria_Virtual_REST.Controllers
{
    using System.Web.Http.Cors;
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
