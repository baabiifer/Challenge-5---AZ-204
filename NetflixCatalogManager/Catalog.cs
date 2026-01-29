namespace NetflixCatalogManager.Models
{
    public class Catalog
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Type { get; set; } // Filme ou Série
        public string Genre { get; set; }
        public int Year { get; set; }
    }
}
