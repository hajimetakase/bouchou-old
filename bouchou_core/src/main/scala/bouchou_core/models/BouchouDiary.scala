package bouchou_core.models

/**
  * Created by hajime on 2017/11/26.
  */
case class BouchouDiary(
                         id: String,
                         title: String,
                         content: String,
                         creatorId: String,
                         createdAt: String,
                         updatedAt: String,
                         deletedAt: String,
                         isDeleted: Boolean,
                         links: List[String],
                         documentsUrls: List[String],
                         tags: List[String],
                         agendas: List[String],
                         pv: Long
                       )
