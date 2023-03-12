using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace Site.Models
{
	public class Company
	{
		[BsonId]
		public ObjectId Company_Id { get; set; }
	}
}
