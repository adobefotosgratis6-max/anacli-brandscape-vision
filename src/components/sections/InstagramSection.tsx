import { useState } from "react"
import { VideoModal } from "@/components/ui/video-modal" // Certifique-se que este caminho está correto
import InstagramVideoCarousel from "@/components/ui/InstagramVideoCarousel"

const instagramReels = [
  {
    id: 1,
    title: "O diagnóstico é o primeiro passo…",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.82787-15/565430822_18392592910125231_3092957077959924458_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=104&ig_cache_key=Mzc0NzYyODEyMTExMDUxMTY0NzE4MzkyNTkyOTA0MTI1MjMx.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyNjh4NDAzMi5zZHIuQzIifQ%3D%3D&_nc_ohc=bbxitbRq5K8Q7kNvwHCcUQ2&_nc_oc=AdmXXngTPVprdXCWPG9MIrL_Q6z4Lf41NuNSdM8i1FQbzg8OuG_VfgrfDMwP0MNFBvekuE9rb_PPOs5OdsvLIDe_&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=Hj40cpYps7HUwoze4ntbIg&oh=00_Afc4kn0FIp59CFDr1_g46OVyyexp1epvFunFmcpUKlgM2A&oe=69059F6E",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQOqEo3j4f59GFWljhzCxk85kH-VBqd_ROKV7ZPEqZmLr4nm0jLWsWXVzFouZusKKBp0qcOQlzFJQfKKeiINVSv4QVbVa8TUX3EYLJ8.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=KzTgu8XrIwEQ7kNvwF_Qyoo&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzkxNTk3Njc3MTA1NDA0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MjMsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=600b99da8f2a2b77&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9GNjRBMDZEQjQ4MjgyNjJENTNDQzYxMDc5MDhBMjJBRV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HUGc1M1NFVDZEYkVTRUVFQUo5VlVUUnZ3eFJBYnN0VEFRQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm-MPKpYb95wIVAigCQzIsF0A3MzMzMzMzGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=n8p18sXeIeeIVjzX8HercA&_nc_zt=28&oh=00_AfdGCTprzoAXsRhki-rp3QWEFM7xqjTufRGeeiSzSty6JQ&oe=6901AF6A",
  },
  {
    id: 2,
    title: "É cada figura que passa por aqui 😂🍭🍬",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.71878-15/550003292_1504353517675788_3783828184792655509_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzcyMzY0NDA0NDE2Njc1MzY4OA%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMiJ9&_nc_ohc=NNooANyVlAQQ7kNvwHqq2HX&_nc_oc=Adm0DU5cdXjR7hwENNBcEB1vNM66GnAizSFgyJLWoW4DMktKy0gpHztf0zuPI4Pd57h_l_AumniP-a5fJTa-NIbn&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=Ogi6c4pBClNAn_zWqyw9fQ&oh=00_AfewXJ3c01HHa6jQHAdA3PDh_bj6ieYkJYAxv--ORp1n4w&oe=6905BABF",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQM2VLcgeNM9ThXZRAfTe_hGoDvzxxMEgo4xp8tDhwYXkTHxpJX7CIaEVIqH8XBKWrLudFPNxV8iJjsYmw2wGMQB_nr5tFQQ8hcou5c.mp4?_nc_cat=111&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=dcd7tzsg7y0Q7kNvwHEMOE3&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTEwODk1NDA3ODA5OTA0MywidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjcsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=eb5222c71e43bb9a&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQzQyNzZGQUQ1RUJFMzVCOEM0MkFGRDc4MDdDRUU4Q192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSlg4dHlER0xOZzltUG9EQVB6U3ZDSUJabkVjYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmxtmt3s-l-AMVAigCQzIsF0AczMzMzMzNGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=VFefeVoWJEZEdT6zdCwkbQ&_nc_zt=28&oh=00_AffvmYGTjB6jPWpc-yvIji8OE5YQSxvp1J2SHAMYVY_toQ&oe=6901B0F8",
  },
  {
    id: 3,
    title: "🩸👶 Tornar o exame de sangue menos assustador para as crianças é possível com algumas atitudes simples!",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.71878-15/540101800_1977018533139694_6332070882807462796_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=107&ig_cache_key=MzcxMjEwNTE1NDgwNTExNjkzNw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMiJ9&_nc_ohc=-wzBbzKuQqsQ7kNvwHMUtJE&_nc_oc=AdlLWmvoPy1Es1_Lgm2zXOQyk-XlIkmtfijK77GbaGD1l0T4ZDwVjqminJ3QFRNeo150VkHYMWMUTIaC8rQzvz2r&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=6gVbj54ajtk86UFVOU8Guw&oh=00_AfdknP9wCXYyMFk5kaa7LovaAfmlpTd7AqNNMusH0bDWhw&oe=6905BC97",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQPlVxbOO0qqLKQBI14ivi3niW7QZvB05n2FE8y6tnjQbgx2wEI_LeLiT8HYQRPz4U5f9NW8j3aU1Rf6JDKbLs0D9hJkNz1dlKgf-lY.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=G5-suZSFIGwQ7kNvwEVQIjd&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTExODc3NDM3OTY2ODA2OSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjQyLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=c82024ecdfd21a2b&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CQTQ0MkZCQzRFOUFDQkVCODgwRUZDMzU1REI0MUE4M192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRUt0UnlBX0F6angzZ1FIQUZPT3E0X0dNNTBDYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmyonf157h_AMVAigCQzIsF0BFJmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=zPGsLoO3IAh2lKn-FczNhA&_nc_zt=28&oh=00_AfemwpORrc34Ulo7klK_Td8rYOwuOsczyyQeQzDZQvpGOg&oe=6901981A",
  },
  {
    id: 4,
    title: "Aqui nosso objetivo é não criar traumas, mas trazer uma relação transformada entre coleta de sangue e nossos pequenos 👦🏽 🍭",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.82787-15/535054483_18384659281125231_3445618626653239423_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzcwMjY4MjY5MjQ0NTg4NzM0MDE4Mzg0NjU5Mjc1MTI1MjMx.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjkwMHgxNjAwLnNkci5DMiJ9&_nc_ohc=dJtuX-TQWZ4Q7kNvwE3dLTU&_nc_oc=AdkwNM0M1k6aiywrGNTaLLjXRdZ5-B987tjngpCF6OM2TO9Yzss4g6ApCjjGX7UiutSM-Np6wv5WPWsQuDvYlD81&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=6gVbj54ajtk86UFVOU8Guw&oh=00_Afdd4XOfvfhJASHa2KHGJzy6Cd6z6-yFEcoop2NSoMGkgg&oe=6905C113",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQPvBEv3Y6dkUAw5EkYqAZVmR94c5DXYuqc8lMVwBobshcM_Ck39pnw23AFWwb1ly3oro5ELNA09mdCucugkoDJhsgsZeGtS6xMQ5FY.mp4?_nc_cat=101&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=9eJTH8aGYmMQ7kNvwHZKBcN&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6NzgwMDQ3MjA3ODI0Njc0LCJ2aV91c2VjYXNlX2lkIjoxMDA5OSwiZHVyYXRpb25fcyI6MTAsInVybGdlbl9zb3VyY2UiOiJ3d3cifQ%3D%3D&ccb=17-1&vs=e750e6381310068e&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9DNDRDNDI2QUM0MzIwN0QyRTk0MDJCQTBCNkU2QjZBMl92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSGdOX2g5eUdLdWhNamtDQU9VVVA0TzlPRnR4YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmxPTXy9zc4gIVAigCQzIsF0AkAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=rXDAizxzhHrTQtWrB83zUw&_nc_zt=28&oh=00_Afc8WgJM_mZSudcM7PSLiwhSf5IAasZ16WLNS9jWitILNw&oe=6901BA5E",
  },
  {
    id: 5,
    title: "Quando o chefe começa a me seguir nas redes sociais 💚😂",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.82787-15/523561433_18381589240125231_7377797963605516552_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=105&ig_cache_key=MzY4NDU1MzUxOTA4MDg0MDQ0OTE4MzgxNTg5MjM3MTI1MjMx.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjIyNjh4NDAzMi5zZHIuQzIifQ%3D%3D&_nc_ohc=suF87P2GF0YQ7kNvwGIrPl4&_nc_oc=AdkmOaEaz3FPzLrBfcgdUsLadTuCdwk8Js1PvdhLoGxe9rXPPmvNE5lrAyp_bxsC4JmhCm6Cdy1dLxYtI1dqzjVi&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=6gVbj54ajtk86UFVOU8Guw&oh=00_AfdaQB0YmYk2tKYWhA0_RLCD0xxnb84iBv8pfanLvHLaaA&oe=6905C0E8",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQNW2XIKZedfpPVle_UKrYZYADjUe9euAF_2lu5VSuJpvip0bqQ_JJtyfHT0BehQXAEOvxaENNU3hsl8lMMocntzk1WYz3wstVB-ly8.mp4?_nc_cat=109&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=O-F2zzJbze0Q7kNvwGijpEk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MzU1Nzc2MjY2MTAyNzIxNCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjEwLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=c5acdda6cf7044b4&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC84NTRDODM4MjhBOUYwQjFFNjVFODJCOTRCN0NBMDE5RF92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRjViR1I5SEZYeno2eXNGQU1TVGhaR01hbmRDYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmnLbYuYXx0QwVAigCQzIsF0AlAAAAAAAAGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=aozWCIBh3chV-RjTiEB1Hg&_nc_zt=28&oh=00_AfcfCXiF8Pkp79Cuk_-9PaC6GYHCSSnh4OTh8moL35bj3A&oe=6901BE0E",
  },
  {
    id: 6,
    title: "CertifA nossa velhice é cultivada de acordo com as nossas escolhas quando ainda jovens 👴🏼💚✨",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.71878-15/520181147_1104056501783439_7422477410617048504_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=111&ig_cache_key=MzY3ODcxMDc0Nzc2OTg1MjA2NQ%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMiJ9&_nc_ohc=0_c3f4p_ckgQ7kNvwGWuEAL&_nc_oc=Adms5Hhy3J9VeQFAMYtkTgJ-4K0jGEnPlagsA1EQTqKXuFbGoQ2zD-sQIyUNBBissmBv4EwAsce6ckLP6OdBl8__&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=y3xB_v9voU4bNjf2mPTCAg&oh=00_AffR4ucnvMJZ-3BCLUCxIdeyvFo3MB_Iczi7WO8BY5l6Bw&oe=6905C124",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQNK4ljN9VQQARVaxREmaSaq8_bmYVb6bOh23326d8NY0TcRcVKLG8QgjvrdmctYWGhj-bgnqW4g_BpL5H0N-D6buxu7rz0dz6SH5dQ.mp4?_nc_cat=107&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=gYhPyaxW9VsQ7kNvwH10seL&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTMwMDc3MzQ1ODI4OTgzNCwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjIxLCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=7f750af1c1279672&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9CNDQ5RDc4MzVDODhCNkFBMEIwQzJFREYyMzBBNTVBNV92aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HTl9vRWg5cGJVMjJaeW9IQUVrLVNGSGN3V0J2YnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAm1JLRvv3CzwQVAigCQzIsF0A1ZmZmZmZmGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=26G8_GgzfkWSqtAfPF4wlA&_nc_zt=28&oh=00_AfeAQWiJjn5I1V_cha8Ifn_pEpukDSDuLF2_2tgQFeWZbA&oe=69019E5C",
  },
  {
    id: 7,
    title: "CertifA nossa velhice é cultivada de acordo com as nossas escolhas quando ainda jovens 👴🏼💚✨",
    thumbnail: "https://scontent-bsb1-1.cdninstagram.com/v/t51.82787-15/517422759_18379457428125231_4512449737363020893_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=MzY3MzYxNzc3MTYyMzc1NDExNTE4Mzc5NDU3NDIyMTI1MjMx.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwOTJ4MTkzNi5zZHIuQzIifQ%3D%3D&_nc_ohc=Zf72f4uSCvMQ7kNvwFI3q0-&_nc_oc=Adl6bmm4u12KNzi4Z2HSdUb9UpJOPPKAxzGoYyLHLzU_uSCyt1TmMPZQfVS5u9ptyq-kG9XScnWpeso7igXMk1su&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_gid=y3xB_v9voU4bNjf2mPTCAg&oh=00_Afe-H0GHplzAbIemYEU-VRFnnLZc1kOFbs6k-l8jmCwffA&oe=6905A5B5",
    videoSrc: "https://scontent-bsb1-1.cdninstagram.com/o1/v/t2/f2/m86/AQMFVk3HJt5h16EO4gb70wGliB6kv1HGXBgVmtTOVt1K0OtTV0gf5jL_ln8ijw3Kzy0wAKkx6EM1Iq15i0ItPW0WJLi2bHkNV-VvHeE.mp4?_nc_cat=105&_nc_sid=5e9851&_nc_ht=scontent-bsb1-1.cdninstagram.com&_nc_ohc=QxZZOeylEG0Q7kNvwHYojc4&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzIuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSIsInhwdl9hc3NldF9pZCI6MTYxNzcxNTQ3MjIzMDgwMSwidmlfdXNlY2FzZV9pZCI6MTAwOTksImR1cmF0aW9uX3MiOjI2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=4c5f5e856b715b14&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC9EOTRDMkRCQ0NFRDZCRjlBQzU3RDNGODUxMDcyNUE4Q192aWRlb19kYXNoaW5pdC5tcDQVAALIARIAFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSEl3MWg3Q21SYXlzNFlDQUFZZXpFelJMVDAzYnFfRUFBQUYVAgLIARIAKAAYABsCiAd1c2Vfb2lsATEScHJvZ3Jlc3NpdmVfcmVjaXBlATEVAAAmoqaPwbfT3wUVAigCQzIsF0A63bItDlYEGBJkYXNoX2Jhc2VsaW5lXzFfdjERAHX-B2XmnQEA&_nc_gid=y3SEGtYWyyey2RJe4t8XIA&_nc_zt=28&oh=00_AfewBu76BhbplQmizIivQe9IDv3A6_I_Usijza6LZFFD_Q&oe=6901B19A",
  }
]

const InstagramSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<{src: string, title: string} | null>(null)

  const handleVideoClick = (video: typeof instagramReels[0]) => {
    setSelectedVideo({ src: video.videoSrc, title: video.title })
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <>
      <InstagramVideoCarousel
        videos={instagramReels}
        onVideoClick={handleVideoClick}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={closeVideo}
        videoSrc={selectedVideo?.src || ""}
        title={selectedVideo?.title || ""}
      />
    </>
  )
}

export default InstagramSection