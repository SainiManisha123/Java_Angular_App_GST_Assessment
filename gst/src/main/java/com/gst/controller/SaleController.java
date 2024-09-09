package com.gst.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.gst.entity.Sale;
import com.gst.service.SaleService;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/sales")
public class SaleController {

    @Autowired
    private SaleService saleService;

    @PostMapping("/createSale")
    public Sale createSale(@RequestBody Sale sale) {
        return saleService.createSale(sale);
    }

    @GetMapping
    public List<Sale> getAllSales() {
        return saleService.getAllSales();
    }

    @GetMapping("/totalRevenueForDay")
    public double getTotalRevenueForDay(@RequestParam("date") String date) {
        return saleService.getTotalRevenueForDay(LocalDate.parse(date));
    }

    @GetMapping("/totalRevenueForMonth")
    public double getTotalRevenueForMonth(@RequestParam("year") int year, @RequestParam("month") int month) {
        return saleService.getTotalRevenueForMonth(year, month);
    }

    @GetMapping("/totalRevenueForYear")
    public double getTotalRevenueForYear(@RequestParam("year") int year) {
        return saleService.getTotalRevenueForYear(year);
    }
}
