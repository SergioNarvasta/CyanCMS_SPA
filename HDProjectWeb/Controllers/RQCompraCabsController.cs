using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HDProjectWeb.Data;
using HDProjectWeb.Models;

namespace HDProjectWeb.Controllers
{
    public class RQCompraCabsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public RQCompraCabsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: RQCompraCabs
        public async Task<IActionResult> Index()
        {
              return View(await _context.RQCompraCab.ToListAsync());
        }

        // GET: RQCompraCabs/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context.RQCompraCab == null)
            {
                return NotFound();
            }

            var rQCompraCab = await _context.RQCompraCab
                .FirstOrDefaultAsync(m => m.Rco_numero == id);
            if (rQCompraCab == null)
            {
                return NotFound();
            }

            return View(rQCompraCab);
        }

        // GET: RQCompraCabs/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: RQCompraCabs/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Rco_numero,Rco_fec_registro,Usuario_origen,User_solicita,Rco_motivo,U_negocio,Centro_costo,Disciplina,Rco_situacion_aprobado,Rco_prioridad,Rco_justificacion,Rco_reembolso,Rco_presupuesto,Rco_categorizado,Ccc_numeroccc,Scc_cotizacion,Occ_numeroocc,Occ_dessituacionocc,OCC_ProveedorOCC")] RQCompraCab rQCompraCab)
        {
            if (ModelState.IsValid)
            {
                _context.Add(rQCompraCab);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(rQCompraCab);
        }

        // GET: RQCompraCabs/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context.RQCompraCab == null)
            {
                return NotFound();
            }

            var rQCompraCab = await _context.RQCompraCab.FindAsync(id);
            if (rQCompraCab == null)
            {
                return NotFound();
            }
            return View(rQCompraCab);
        }

        // POST: RQCompraCabs/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Rco_numero,Rco_fec_registro,Usuario_origen,User_solicita,Rco_motivo,U_negocio,Centro_costo,Disciplina,Rco_situacion_aprobado,Rco_prioridad,Rco_justificacion,Rco_reembolso,Rco_presupuesto,Rco_categorizado,Ccc_numeroccc,Scc_cotizacion,Occ_numeroocc,Occ_dessituacionocc,OCC_ProveedorOCC")] RQCompraCab rQCompraCab)
        {
            if (id != rQCompraCab.Rco_numero)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rQCompraCab);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RQCompraCabExists(rQCompraCab.Rco_numero))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(rQCompraCab);
        }

        // GET: RQCompraCabs/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.RQCompraCab == null)
            {
                return NotFound();
            }

            var rQCompraCab = await _context.RQCompraCab
                .FirstOrDefaultAsync(m => m.Rco_numero == id);
            if (rQCompraCab == null)
            {
                return NotFound();
            }

            return View(rQCompraCab);
        }

        // POST: RQCompraCabs/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.RQCompraCab == null)
            {
                return Problem("Entity set 'ApplicationDbContext.RQCompraCab'  is null.");
            }
            var rQCompraCab = await _context.RQCompraCab.FindAsync(id);
            if (rQCompraCab != null)
            {
                _context.RQCompraCab.Remove(rQCompraCab);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RQCompraCabExists(string id)
        {
          return _context.RQCompraCab.Any(e => e.Rco_numero == id);
        }
    }
}
