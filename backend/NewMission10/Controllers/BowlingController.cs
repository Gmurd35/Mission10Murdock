using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NewMission10.Models;

namespace NewMission10.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BowlingController : ControllerBase
    {
        private IBowlingRepository _bowlingRepository;
        public BowlingController(IBowlingRepository temp) {
            _bowlingRepository = temp;
        } 

        public IEnumerable<Bowler> Get()
        {
            var bowlingData = _bowlingRepository.Bowlers.ToArray();

            return bowlingData;
        }
    }
}
