using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Vote.Hubs
{
    public class VoteHub : Hub
    {
        public async Task SendVote(string identifier)
        {
            await Clients.All.SendAsync("ReceiveVote", identifier);
        }
    }
}
