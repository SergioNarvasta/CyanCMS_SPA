﻿

using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using Site.Models.Comunes;

namespace Site.Models
{
	public class User : Audit
	{
		[BsonId]
		public ObjectId User_Id { get; set; }
		public string User_Pk { get; set; }
		public string User_Nombre { get; set; }
		public string User_Direccion { get; set; }
		public string User_Telefono { get; set; }
		public string User_Email { get; set; }
		public string User_Token { get; set; }
		public int User_Estado { get; set; }
		public string Plan_Pk { get; set; }
		public string Rol_Pk { get; set; }
	}
}
