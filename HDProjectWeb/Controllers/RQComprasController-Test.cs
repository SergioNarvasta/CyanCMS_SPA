using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using HDProjectWeb.Data;
using RQ_Compra.Models;

namespace HDProjectWeb.Controllers
{
    public class RQComprasController_Test : Controller
    {
        private readonly ApplicationDbContext _context;

        public RQComprasController_Test(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
              return View(await _context.RQCompra.ToListAsync());
        }

        public async Task<IActionResult> Details(string id)
        {
            if (id == null || _context.RQCompra == null)
            {
                return NotFound();
            }
            var rQCompra = await _context.RQCompra
                .FirstOrDefaultAsync(m => m.Rco_numrco == id);
            if (rQCompra == null)
            {
                return NotFound();
            }

            return View(rQCompra);
        }

        // GET: RQCompras/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: RQCompras/Create
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Cia_codcia,Suc_codsuc,Rco_numrco,Tin_codtin,Rco_fecreg,Rco_fecsug,Adi_codadi,S10_usuario,Rco_motivo,Rco_glorco,Cco_codcco,Rco_sitrco,Rco_sitlog,Ano_codano,Mes_codmes,Usu_codapr,Rco_fecapr,Rco_gloapr,Rco_indest,Rco_feccre,Rco_usucre,Rco_fecact,Rco_codusu,Ung_codung,Rco_indcie,Rco_obscie,Rco_indval,Rco_numpcn,Dis_coddis,Rco_rembls,Rco_presup,Rco_9digit,Rco_priori,Rco_codalt,Rco_obspri,Rco_rutdoc,Rco_fecprg,Rco_procur,Rco_tiprco,Ocm_corocm,Tmo_codtmo,Rco_fecent,Rco_impser,Rco_flgcom,Rco_flgate,Rco_jusate,Rco_flgmig,Rco_imppor,Rco_hito01,Cpa_codcpa,Rco_imprec,Rco_impfac,Rco_numsol,Rco_monpre,Rco_imppre,Rco_sitctb,Rco_ajufac,Rco_impcfm,Rco_feinre,Rco_fefire,Rco_clfprv,Rco_gloclf,Rco_ultcer,Rco_feaclf,Rco_usaclf")] RQCompra rQCompra)
        {
            if (ModelState.IsValid)
            {
                _context.Add(rQCompra);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(rQCompra);
        }

        // GET: RQCompras/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null || _context.RQCompra == null)
            {
                return NotFound();
            }
            var rQCompra = await _context.RQCompra.FindAsync(id);
            if (rQCompra == null)
            {
                return NotFound();
            }
            return View(rQCompra);
        }

        // POST: RQCompras/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("Cia_codcia,Suc_codsuc,Rco_numrco,Tin_codtin,Rco_fecreg,Rco_fecsug,Adi_codadi,S10_usuario,Rco_motivo,Rco_glorco,Cco_codcco,Rco_sitrco,Rco_sitlog,Ano_codano,Mes_codmes,Usu_codapr,Rco_fecapr,Rco_gloapr,Rco_indest,Rco_feccre,Rco_usucre,Rco_fecact,Rco_codusu,Ung_codung,Rco_indcie,Rco_obscie,Rco_indval,Rco_numpcn,Dis_coddis,Rco_rembls,Rco_presup,Rco_9digit,Rco_priori,Rco_codalt,Rco_obspri,Rco_rutdoc,Rco_fecprg,Rco_procur,Rco_tiprco,Ocm_corocm,Tmo_codtmo,Rco_fecent,Rco_impser,Rco_flgcom,Rco_flgate,Rco_jusate,Rco_flgmig,Rco_imppor,Rco_hito01,Cpa_codcpa,Rco_imprec,Rco_impfac,Rco_numsol,Rco_monpre,Rco_imppre,Rco_sitctb,Rco_ajufac,Rco_impcfm,Rco_feinre,Rco_fefire,Rco_clfprv,Rco_gloclf,Rco_ultcer,Rco_feaclf,Rco_usaclf")] RQCompra rQCompra)
        {
            if (id != rQCompra.Rco_numrco)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rQCompra);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RQCompraExists(rQCompra.Rco_numrco))
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
            return View(rQCompra);
        }

        // GET: RQCompras/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null || _context.RQCompra == null)
            {
                return NotFound();
            }

            var rQCompra = await _context.RQCompra
                .FirstOrDefaultAsync(m => m.Rco_numrco == id);
            if (rQCompra == null)
            {
                return NotFound();
            }

            return View(rQCompra);
        }

        // POST: RQCompras/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            if (_context.RQCompra == null)
            {
                return Problem("Entity set 'ApplicationDbContext.RQCompra'  is null.");
            }
            var rQCompra = await _context.RQCompra.FindAsync(id);
            if (rQCompra != null)
            {
                _context.RQCompra.Remove(rQCompra);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RQCompraExists(string id)
        {
          return _context.RQCompra.Any(e => e.Rco_numrco == id);
        }
    }
}
