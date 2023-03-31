
using MongoDB.Bson;
using MongoDB.Driver;
using Site.Interfaces;
using Site.Models;

namespace Site.Repositorios
{
    public class ContentMainRepository  : IContentMainRepository
    {
        internal MongoRepository _repository = new MongoRepository();

        private IMongoCollection<ContentMain> collection;

        public ContentMainRepository() 
        {
            collection = _repository.database.GetCollection<ContentMain>("ContentMain");
        }

        public async Task<IEnumerable<ContentMain>> Listado() 
        {
            var list = await collection.FindAsync(new BsonDocument())
                       .Result.ToListAsync();
            return list;
        }
        public async Task<IEnumerable<ContentMain>> GetByCompanyPk(string Company_Pk)
        {
            return await collection.FindAsync(new BsonDocument 
               { { "Company_Pk", Company_Pk } })
                .Result.ToListAsync();
        }


    }
}
