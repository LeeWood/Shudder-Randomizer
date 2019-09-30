import { url } from "inspector"

var MovieData = 
[
  {
    title: "The Taking of Deborah Logan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/61f84e8542073e20_boxart.jpg"
  },
  {
    title: "One Cut of the Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b39c448456ba11d7_boxart.jpg"
  },
  {
    title: "Twins of Evil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a99e171fc2268732_boxart.jpg"
  },
  {
    title: "Vampire Circus",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b23758313962c59d_boxart.jpg"
  },
  {
    title: "Hell House III: Lake of Fire",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f016a6798452e3b3_boxart.jpg"
  },
  {
    title: "Take Shelter",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4e2270d1f7315076_boxart.jpg"
  },
  {
    title: "Hands of the Ripper",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/15bd7877448ba6fe_boxart.jpg"
  },
  {
    title: "Tigers Are Not Afraid",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3e93fa5f5681cfea_boxart.jpg"
  },
  {
    title: "Train to Busan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a020c3bb012ddbe0_boxart.jpg"
  },
  {
    title: "The Wrath",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/636355b699fb6118_boxart.jpg"
  },
  {
    title: "Belzebuth",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8c82a87daaa9c934_boxart.jpg"
  },
  {
    title: "Spring",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/53427778b7f21493_boxart.jpg"
  },
  {
    title: "Humanoids From The Deep",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/888844dd5acf4d78_boxart.jpg"
  },
  {
    title: "The Love Witch",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/49858edff4cf6b43_boxart.jpg"
  },
  {
    title: "Bad Moon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/35ca2c4ea95b6c12_boxart.jpg"
  },
  {
    title: "Hell Night",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/384141a084698098_boxart.jpg"
  },
  {
    title: "Incident In A Ghostland",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/59001ae038617c8d_boxart.jpg"
  },
  {
    title: "Get My Gun",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/546cb862dc3bced3_boxart.jpg"
  },
  {
    title: "Chopping Mall",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d43aedc92b671c84_boxart.jpg"
  },
  {
    title: "Why Horror?",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3c5eaf8d6126cb0d_boxart.jpg"
  },
  {
    title: "Slumber Party Massacre",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/86845c838a537bc3_boxart.jpg"
  },
  {
    title: "Slumber Party Massacre II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ccb183a3ec8eb526_boxart.jpg"
  },
  {
    title: "Raising Cain",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a68269f789be4a0d_boxart.jpg"
  },
  {
    title: "Moon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/04ce5635f2d95ecd_boxart.jpg"
  },
  {
    title: "The Quiet Room",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ce3a539c633c18b8_boxart.jpg"
  },
  {
    title: "El Gigante",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e2127e62d6c8532f_boxart.jpg"
  },
  {
    title: "The Transfiguration",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a19287f7e83f36ec_boxart.jpg"
  },
  {
    title: "Deadtectives",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/640c550dbc0c04ce_boxart.jpg"
  },
  {
    title: "All the Colors of the Dark",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dd0460d6ee73e901_boxart.jpg"
  },
  {
    title: "Stake Land",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/086b88bf62caf4c4_boxart.jpg"
  },
  {
    title: "Stake Land II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b1546efde3e127b5_boxart.jpg"
  },
  {
    title: "Party Hard, Die Young",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ea8cc40a7770ac9e_boxart.jpg"
  },
  {
    title: "Vault of Horror",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e68a35519cb29715_boxart.jpg"
  },
  {
    title: "Stranger by the Lake",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6e484c042231a061_boxart.jpg"
  },
  {
    title: "The Wailing",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a769cf030bb61616_boxart.jpg"
  },
  {
    title: "Next of Kin",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a1e0985a2da5c59b_boxart.jpg"
  },
  {
    title: "VIY",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e770f2fe4d4ea5d7_boxart.jpg"
  },
  {
    title: "Knife + Heart",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9a038aa619b633f5_boxart.jpg"
  },
  {
    title: "The Wild Boys",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9dce1c68b1fd0336_boxart.jpg"
  },
  {
    title: "Here Comes The Devil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/80c3a326e1347bde_boxart.jpg"
  },
  {
    title: "Hagazussa",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f813a86b35ddc9ed_boxart.jpg"
  },
  {
    title: "Boar",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/698b57648e6b8ea5_boxart.jpg"
  },
  {
    title: "The Nightshifter",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e27d9313569e3237_boxart.jpg"
  },
  {
    title: "Effects",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2dbe4840a92dc81e_boxart.jpg"
  },
  {
    title: "White God",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9715e4571207b152_boxart.jpg"
  },
  {
    title: "VHS 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f81c547d7b3be075_boxart.jpg"
  },
  {
    title: "VHS: Viral",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/427b6bcad1a898d1_boxart.jpg"
  },
  {
    title: "The Ranger",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6d92db92d68f23b8_boxart.jpg"
  },
  {
    title: "Bloody Birthday",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/fcf5f1bdbfacb073_boxart.jpg"
  },
  {
    title: "Pusher",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c66339cf8e32759a_boxart.jpg"
  },
  {
    title: "Pusher 2: With Blood On My Hands",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/306cefae0a5e74fb_boxart.jpg"
  },
  {
    title: "Pusher 3: I'm the Angel of Death",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b38503c4948eb67a_boxart.jpg"
  },
  {
    title: "Monster Party",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/30c8b2ee73908867_boxart.jpg"
  },
  {
    title: "Deadbirds",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cb97d9522a596dc1_boxart.jpg"
  },
  {
    title: "Most Beautiful Mind",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b0d209d199169395_boxart.jpg"
  },
  {
    title: "Blue My Mind",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/80633a5b6879d3ad_boxart.jpg"
  },
  {
    title: "Psychopaths",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4a1e508ec73683c2_boxart.jpg"
  },
  {
    title: "Lizzie",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/722cc3d8888350fd_boxart.jpg"
  },
  {
    title: "Not Quite Hollywood",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3ad010445acc2b10_boxart.jpg"
  },
  {
    title: "Last Shift",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a187107a99c7c216_boxart.jpg"
  },
  {
    title: "Cheap Thrills",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/1357fb8d4878b565_boxart.jpg"
  },
  {
    title: "Puppet Master: The Littlest Reich",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/33f01ec86e2e9234_boxart.jpg"
  },
  {
    title: "The Queen of Hollywood Blvd",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b460db3ee3defd64_boxart.jpg"
  },
  {
    title: "Hansel and Gretel Get Baked",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/540de0dbab9e61b5_boxart.jpg"
  },
  {
    title: "A Boy and his Dog",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/64278e1e1e6499eb_boxart.jpg"
  },
  {
    title: "Deadbeat At Dawn",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/24cf7046fef8d140_boxart.jpg"
  },
  {
    title: "Over Your Dead Body",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3119434400782af5_boxart.jpg"
  },
  {
    title: "Don't Torture A Duckling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cde827101fa6bcc1_boxart.jpg"
  },
  {
    title: "Madhouse",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dc8535eb5149af0d_boxart.jpg"
  },
  {
    title: "The Crucifixion",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7e7472c3e2c36855_boxart.jpg"
  },
  {
    title: "Beast",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/69bd06128de16fcb_boxart.jpg"
  },
  {
    title: "Brain Damage",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/affc8869a5c66a1a_boxart.jpg"
  },
  {
    title: "Images",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b5e187fb120034f7_boxart.jpg"
  },
  {
    title: "Horror Noire",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e650978256281a67_boxart.jpg"
  },
  {
    title: "Ganja and Hess",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/50656fa11749aade_boxart.jpg"
  },
  {
    title: "Don't Leave Home",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3284999215c1d719_boxart.jpg"
  },
  {
    title: "Bro: Bangkok Knockout",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5f3c795b8a811154_boxart.jpg"
  },
  {
    title: "Merantau",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8ff61dc73fb516a7_boxart.jpg"
  },
  {
    title: "Exiled",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/73e1b2597fbc7e44_boxart.jpg"
  },
  {
    title: "Big Man Japan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8abee30584623520_boxart.jpg"
  },
  {
    title: "Barking Dogs Never Bite",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b73cd791f012fdb8_boxart.jpg"
  },
  {
    title: "Cold Skin",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ba5d91c8899eb5ed_boxart.jpg"
  },
  {
    title: "Night of the Living Deb",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c8a02055c2118fc4_boxart.jpg"
  },
  {
    title: "Darling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3a488d59366c3b01_boxart.jpg"
  },
  {
    title: "Last Showing",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/82ebbd4e7af422f9_boxart.jpg"
  },
  {
    title: "The Void",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/05d820dcdf64ec36_boxart.jpg"
  },
  {
    title: "Ong Bak The Thai Warrior",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6a2c9b2cfad59635_boxart.jpg"
  },
  {
    title: "Ong Bak 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0ea427ca94a015e0_boxart.jpg"
  },
  {
    title: "The Changeling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/202c700c06f4916f_boxart.jpg"
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  },
  {
    title: "",
    cover: ""
  }  
]

export default MovieData;


