﻿using System;
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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }
        public virtual DbSet<EjemploSIST.Models.Entidades.OrdenCompraCab> OrdenCompraCab { get; set; }
        public virtual DbSet<EjemploSIST.Models.Entidades.OrdenCompraDet> OrdenCompraDet { get; set; }
        protected override void OnConfiguring (DbContextOptionsBuilder optionBuilder)
        {
            
            optionBuilder.UseSqlServer("Server=RANDY;DataBase=DBLoguistica;Trusted_Connection=true;MultipleActiveResultSets=True");
        }
    }
}
