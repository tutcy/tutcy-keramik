package com.tutcy.keramik.backend.api

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v1/workshops")
class WorkshopsController {

    @GetMapping
    fun getWorkshops() = listOf("Workshop1", "Workshop2", "Workshop3")
}