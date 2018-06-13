package com.example.mn.mykt.view.main

import android.support.v7.widget.RecyclerView
import android.view.View
import android.widget.ImageView
import android.widget.TextView
import com.example.mn.mykt.R
import com.example.mn.mykt.model.MarvelCharacter
import com.example.mn.mykt.view.common.ItemAdapter
import com.example.mn.mykt.view.common.bindView
import com.example.mn.mykt.view.common.loadImage

class CharacterItemAdapter(
        val character: MarvelCharacter // 1
) : ItemAdapter<CharacterItemAdapter.ViewHolder>(R.layout.item_character) {

    override fun onCreateViewHolder(itemView: View) = ViewHolder(itemView)

    override fun ViewHolder.onBindViewHolder() { // 2
        textView.text = character.name
        imageView.loadImage(character.imageUrl) // 3
    }

    class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val textView by bindView<TextView>(R.id.textView) // 4
        val imageView by bindView<ImageView>(R.id.imageView) // 4
    }
}