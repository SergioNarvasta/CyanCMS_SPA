
using MongoDB.Bson;
using MongoDB.Driver;
using Site.Interfaces;
using Site.Models;

namespace Site.Repositorios
{
    public class SliderSecRepository : ISliderSecRepository
	{
        internal MongoRepository _repository = new MongoRepository();

        private IMongoCollection<SliderSec> collection;

        public SliderSecRepository() 
        {
            collection = _repository.database.GetCollection<SliderSec>("SliderSec");
        }

        public async Task<IEnumerable<SliderSec>> Listado() 
        {
            var list = await collection.FindAsync(new BsonDocument())
                       .Result.ToListAsync();
            return list;
        }



    }
}
