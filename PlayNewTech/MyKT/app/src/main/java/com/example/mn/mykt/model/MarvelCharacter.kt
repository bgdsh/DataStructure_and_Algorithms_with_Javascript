package com.example.mn.mykt.model

import com.example.mn.mykt.data.network.dto.CharacterMarvelDto

data class MarvelCharacter(
        val name: String,
        val imageUrl: String
) {
    constructor(dto: CharacterMarvelDto):this(
            name=dto.name,imageUrl = dto.imageUrl
    )
}