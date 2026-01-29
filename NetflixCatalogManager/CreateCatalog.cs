using Microsoft.Azure.WebJobs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Newtonsoft.Json;
using System.IO;
using System.Threading.Tasks;
using NetflixCatalogManager.Models;
using NetflixCatalogManager.Services;

public static class CreateCatalog
{
    [FunctionName("CreateCatalog")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = "catalog")] HttpRequest req)
    {
        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        var catalog = JsonConvert.DeserializeObject<Catalog>(requestBody);

        var db = new DatabaseService(Environment.GetEnvironmentVariable("SqlConnectionString"));
        await db.CreateCatalog(catalog);

        return new OkObjectResult("Catálogo criado com sucesso!");
    }
}
