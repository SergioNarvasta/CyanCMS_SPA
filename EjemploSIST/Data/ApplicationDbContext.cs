using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using EjemploSIST.Models;

namespace EjemploSIST.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public ApplicationDbContext()
        {
        }
        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=HDVMSQLDES; Database=Z_SIST; User=sa; Password=S0p0rt3; MultipleActiveResultSets=true;");
        }
        public  DbSet<EjemploSIST.Models.Entidades.OrdenCompraCab> OrdenCompraCab { get; set; }
        public  DbSet<EjemploSIST.Models.Entidades.OrdenCompraDet> OrdenCompraDet { get; set; }
    }
}
