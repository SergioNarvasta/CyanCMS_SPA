using MongoDB.Bson;

namespace Site.Models
{
	public class SiteMenuOptions
	{
		public ObjectId _id { get; set; }
		public string MenuOptions_Nombre { get; set; }
        public int MenuOptions_Estado { get; set; }
		public int MenuOptions_Orden  { get; set; }
	}
}
