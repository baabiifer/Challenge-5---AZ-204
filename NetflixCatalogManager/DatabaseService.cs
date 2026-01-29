using System.Data.SqlClient;
using NetflixCatalogManager.Models;

namespace NetflixCatalogManager.Services
{
    public class DatabaseService
    {
        private readonly string _connectionString;

        public DatabaseService(string connectionString)
        {
            _connectionString = connectionString;
        }

        public async Task<int> CreateCatalog(Catalog catalog)
        {
            using var conn = new SqlConnection(_connectionString);
            await conn.OpenAsync();
            var cmd = new SqlCommand("INSERT INTO Catalogs (Title, Type, Genre, Year) VALUES (@Title, @Type, @Genre, @Year)", conn);
            cmd.Parameters.AddWithValue("@Title", catalog.Title);
            cmd.Parameters.AddWithValue("@Type", catalog.Type);
            cmd.Parameters.AddWithValue("@Genre", catalog.Genre);
            cmd.Parameters.AddWithValue("@Year", catalog.Year);
            return await cmd.ExecuteNonQueryAsync();
        }
    }
}
