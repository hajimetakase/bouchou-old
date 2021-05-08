package bouchou_core.models

/**
  * Created by hajime on 2017/11/23.
  */
case class BouchouArticle(
                           id: String,
                           title: String,
                           content: String,
                           creatorId: String,
                           createdAt: String,
                           updatedAt: String,
                           deletedAt: String,
                           isDeleted: Boolean,
                           laws: List[String],
                           links: List[String],
                           documentsUrls: List[String],
                           tags: List[String],
                           agendas: List[String],
                           bouchouId: String,
                           eventType: String,
                           pv: Long
)
