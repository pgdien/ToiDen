//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CMS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Post
    {
        public int idPost { get; set; }
        public int idCategory { get; set; }
        public string idUserCreated { get; set; }
        public string idUserModified { get; set; }
        public Nullable<System.DateTime> timeCreated { get; set; }
        public Nullable<System.DateTime> timeModified { get; set; }
        public string title { get; set; }
        public string alias { get; set; }
        public string content { get; set; }
        public string note { get; set; }
        public string description { get; set; }
        public Nullable<int> published { get; set; }
        public string image { get; set; }
        public string tags { get; set; }
        public string version { get; set; }
        public Nullable<int> deleted { get; set; }
        public Nullable<int> featured { get; set; }
        public string metadescription { get; set; }
        public string metakewords { get; set; }
        public string author { get; set; }
        public string robots { get; set; }
    }
}
