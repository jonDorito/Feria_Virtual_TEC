﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Feria_Virtual_REST.Models
{
    public class Product
    {
        public string pName;
        public string category;
        public int price;
        public string packageMode;
        public int availability;

        public Product(string pName, string category, int price, string packageMode, int availability){
            this.pName = pName;
            this.category = category;
            this.price = price;
            this.packageMode = packageMode;
            this.availability = availability;
        }
    }
}