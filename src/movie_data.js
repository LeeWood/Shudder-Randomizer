import { url } from "inspector"

var MovieData = 
[
  {
    title: "The Taking of Deborah Logan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/61f84e8542073e20_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-taking-of-deborah-logan/5207995"
  },
  {
    title: "One Cut of the Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b39c448456ba11d7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/one-cut-of-the-dead/5179585"
  },
  {
    title: "Twins of Evil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a99e171fc2268732_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/twins-of-evil/5207993"
  },
  {
    title: "Vampire Circus",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b23758313962c59d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/vampire-circus/5207994"
  },
  {
    title: "Hell House LLC III: Lake of Fire",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f016a6798452e3b3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/hell-house-llc-iii-lake-of-fire/5207992"
  },
  {
    title: "Take Shelter",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4e2270d1f7315076_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/take-shelter/2604228"
  },
  {
    title: "Hands of the Ripper",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/15bd7877448ba6fe_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/hands-of-the-ripper/5207991"
  },
  {
    title: "Tigers Are Not Afraid",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3e93fa5f5681cfea_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/tigers-are-not-afraid/5138008"
  },
  {
    title: "Train to Busan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a020c3bb012ddbe0_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/train-to-busan/5124465"
  },
  {
    title: "The Wrath",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/636355b699fb6118_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/train-to-busan/5124465"
  },
  {
    title: "Belzebuth",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8c82a87daaa9c934_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/belzebuth/5124414"
  },
  {
    title: "Spring",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/53427778b7f21493_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/spring/3572462"
  },
  {
    title: "Humanoids From The Deep",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/888844dd5acf4d78_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/humanoids-from-the-deep/5076129"
  },
  {
    title: "The Love Witch",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/49858edff4cf6b43_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-love-witch/5111730"
  },
  {
    title: "Bad Moon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/35ca2c4ea95b6c12_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/bad-moon/5076127"
  },
  {
    title: "Hell Night",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/384141a084698098_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/hell-night/5076128"
  },
  {
    title: "Incident In A Ghostland",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/59001ae038617c8d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/incident-in-a-ghostland/5091176"
  },
  {
    title: "Get My Gun",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/546cb862dc3bced3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/get-my-gun/5009201"
  },
  {
    title: "Chopping Mall",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d43aedc92b671c84_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/chopping-mall/5076126"
  },
  {
    title: "Why Horror?",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3c5eaf8d6126cb0d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/why-horror/5091178"
  },
  {
    title: "Slumber Party Massacre",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/86845c838a537bc3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-slumber-party-massacre/5076124"
  },
  {
    title: "Slumber Party Massacre II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ccb183a3ec8eb526_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/slumber-party-massacre-2/5076125"
  },
  {
    title: "Raising Cain",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a68269f789be4a0d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/raising-cain/4801034"
  },
  {
    title: "Moon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/04ce5635f2d95ecd_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/moon/4801033"
  },
  {
    title: "The Quiet Room",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ce3a539c633c18b8_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-quiet-room/5084259"
  },
  {
    title: "El Gigante",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e2127e62d6c8532f_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/el-gigante/5084260"
  },
  {
    title: "The Transfiguration",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a19287f7e83f36ec_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-transfiguration/4886871"
  },
  {
    title: "Deadtectives",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/640c550dbc0c04ce_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/deadtectives/5040496"
  },
  {
    title: "All the Colors of the Dark",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dd0460d6ee73e901_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/all-the-colors-of-the-dark/5009200"
  },
  {
    title: "Stake Land",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/086b88bf62caf4c4_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/stake-land/2476267"
  },
  {
    title: "Stake Land II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b1546efde3e127b5_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/stake-land-ii/5040493"
  },
  {
    title: "Party Hard, Die Young",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ea8cc40a7770ac9e_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/party-hard-die-young/5040492"
  },
  {
    title: "Vault of Horror",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e68a35519cb29715_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-vault-of-horror/5040491"
  },
  {
    title: "Stranger by the Lake",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6e484c042231a061_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/stranger-by-the-lake/5057053"
  },
  {
    title: "The Wailing",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a769cf030bb61616_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-wailing/4991639"
  },
  {
    title: "Next of Kin",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a1e0985a2da5c59b_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/next-of-kin/4992256"
  },
  {
    title: "VIY",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e770f2fe4d4ea5d7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/viy/4992258"
  },
  {
    title: "Knife + Heart",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9a038aa619b633f5_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/knife-heart/4965004"
  },
  {
    title: "The Wild Boys",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9dce1c68b1fd0336_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-wild-boys/4977909"
  },
  {
    title: "Here Comes The Devil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/80c3a326e1347bde_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/here-comes-the-devil/2627722"
  },
  {
    title: "Hagazussa",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f813a86b35ddc9ed_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/hagazussa/4950217"
  },
  {
    title: "Boar",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/698b57648e6b8ea5_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/boar/4772806"
  },
  {
    title: "The Nightshifter",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e27d9313569e3237_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-nightshifter/4863706"
  },
  {
    title: "Effects",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2dbe4840a92dc81e_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/effects/4864359"
  },
  {
    title: "White God",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9715e4571207b152_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/white-god/4835770"
  },
  {
    title: "VHS 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f81c547d7b3be075_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/vhs-2/2440709"
  },
  {
    title: "VHS: Viral",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/427b6bcad1a898d1_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/vhs-viral/2440711"
  },
  {
    title: "The Ranger",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6d92db92d68f23b8_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-ranger/4856226"
  },
  {
    title: "Bloody Birthday",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/fcf5f1bdbfacb073_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/bloody-birthday/2327279"
  },
  {
    title: "Pusher",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c66339cf8e32759a_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/pusher/4804127"
  },
  {
    title: "Pusher 2: With Blood On My Hands",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/306cefae0a5e74fb_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/pusher-2-with-blood-on-my-hands/4804128"
  },
  {
    title: "Pusher 3: I'm the Angel of Death",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b38503c4948eb67a_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/pusher-3-im-the-angel-of-death/4804129"
  },
  {
    title: "Monster Party",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/30c8b2ee73908867_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/monster-party/4671162"
  },
  {
    title: "Deadbirds",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cb97d9522a596dc1_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dead-birds/2604220"
  },
  {
    title: "Most Beautiful Island",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b0d209d199169395_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/most-beautiful-island/4849495"
  },
  {
    title: "Blue My Mind",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/80633a5b6879d3ad_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/blue-my-mind/4849494"
  },
  {
    title: "Psychopaths",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4a1e508ec73683c2_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/psychopaths/4849496"
  },
  {
    title: "Lizzie",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/722cc3d8888350fd_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/lizzie/4849497"
  },
  {
    title: "Not Quite Hollywood",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3ad010445acc2b10_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/not-quite-hollywood-the-wild-untold-story-of-ozploitation/4359096"
  },
  {
    title: "Last Shift",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a187107a99c7c216_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/last-shift/4818701"
  },
  {
    title: "Cheap Thrills",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/1357fb8d4878b565_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/cheap-thrills/4426486"
  },
  {
    title: "Puppet Master: The Littlest Reich",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/33f01ec86e2e9234_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/puppet-master-the-littlest-reich/4671171"
  },
  {
    title: "The Queen of Hollywood Blvd",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b460db3ee3defd64_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-queen-of-hollywood-blvd/4804126"
  },
  {
    title: "Hansel and Gretel Get Baked",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/540de0dbab9e61b5_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/hansel-gretel-get-baked/2898261"
  },
  {
    title: "A Boy and his Dog",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/64278e1e1e6499eb_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/a-boy-and-his-dog/4704997"
  },
  {
    title: "Deadbeat At Dawn",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/24cf7046fef8d140_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/deadbeat-at-dawn/4759765"
  },
  {
    title: "Over Your Dead Body",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3119434400782af5_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/over-your-dead-body/4704996"
  },
  {
    title: "Don't Torture A Duckling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cde827101fa6bcc1_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dont-torture-a-duckling/2419292"
  },
  {
    title: "Madhouse",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dc8535eb5149af0d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/madhouse/4758548"
  },
  {
    title: "The Crucifixion",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7e7472c3e2c36855_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-crucifixion/4702990"
  },
  {
    title: "Beast",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/69bd06128de16fcb_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/beast/4695227"
  },
  {
    title: "Brain Damage",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/affc8869a5c66a1a_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/brain-damage/4759764"
  },
  {
    title: "Images",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b5e187fb120034f7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/images/4761134"
  },
  {
    title: "Horror Noire: A History of Black Horror",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e650978256281a67_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/horror-noire-a-history-of-black-horror/4548652"
  },
  {
    title: "Ganja and Hess",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/50656fa11749aade_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ganja-and-hess/2325509"
  },
  {
    title: "Don't Leave Home",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3284999215c1d719_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dont-leave-home/4687597"
  },
  {
    title: "BKO: Bangkok Knockout",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5f3c795b8a811154_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/bko-bangkok-knockout/4695228"
  },
  {
    title: "Merantau",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8ff61dc73fb516a7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/merantau/4695229"
  },
  {
    title: "Exiled",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/73e1b2597fbc7e44_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/exiled/4694189"
  },
  {
    title: "Big Man Japan",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8abee30584623520_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/big-man-japan/4694190"
  },
  {
    title: "Barking Dogs Never Bite",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b73cd791f012fdb8_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/barking-dogs-never-bite/4688586"
  },
  {
    title: "Cold Skin",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ba5d91c8899eb5ed_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/cold-skin/4676368"
  },
  {
    title: "Night of the Living Deb",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c8a02055c2118fc4_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/night-of-the-living-deb/4674233"
  },
  {
    title: "Darling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3a488d59366c3b01_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/darling/4672540"
  },
  {
    title: "Last Showing",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/82ebbd4e7af422f9_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-last-showing/4672541"
  },
  {
    title: "The Void",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/05d820dcdf64ec36_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-void/4676367"
  },
  {
    title: "Ong Bak The Thai Warrior",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6a2c9b2cfad59635_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ong-bak-the-thai-warrior/4671238"
  },
  {
    title: "Ong Bak 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0ea427ca94a015e0_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ong-bak-2/4671239"
  },
  {
    title: "The Changeling",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/202c700c06f4916f_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-changeling/4384586"
  },
  {
    title: "Ichi The Killer",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0e713567cb7b105c_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ichi-the-killer/2227969"
  },
  {
    title: "The Mimic",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8b7d157dfb6ebc79_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-mimic/4647683"
  },
  {
    title: "Leviathan: The Story of Hellraiser and Hellbound Hellraiser Part 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dd9b75d8ab585b08_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/leviathan-the-story-of-hellraiser-part-2/4647687"
  },
  {
    title: "All The Creatures Were Stirring",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7c1a4c19b7a6955e_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/all-the-creatures-were-stirring/4647668"
  },
  {
    title: "Christmas Presence",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/573dd119cee87fba_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/christmas-presence/4647669"
  },
  {
    title: "The Dead Lands",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/974eb73f8d6dc3c6_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-dead-lands/4557009"
  },
  {
    title: "The Winged Serpent",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3b7773b4f34e6cc7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/q-the-winged-serpent/2337564"
  },
  {
    title: "King Cohen",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/21b4fa0cb8c268f9_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/king-cohen-the-wild-world-of-filmmaker-larry-cohen/4644772"
  },
  {
    title: "You Might Be the Killer",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2d766e755c9ba5d7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/you-might-be-the-killer/4644780"
  },
  {
    title: "Christmas Evil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5fc88a611a8ac9a6_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/christmas-evil/2443232"
  },
  {
    title: "Maniac",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e4b2d1b1c6f19302_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/maniac/2325585"
  },
  {
    title: "Dead and Buried",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a0cccc7a1c6d1f19_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dead-and-buried/2325145"
  },
  {
    title: "Double Lover",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f8673e48ea471edd_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/double-lover/4432431"
  },
  {
    title: "Death Line",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/528f417eda3c0302_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/death-line-aka-raw-meat/4557018"
  },
  {
    title: "Mandy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a5893189d2c98895_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/mandy/4492002"
  },
  {
    title: "Liquid Sky",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/23f2f9f4aeecdf51_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/liquid-sky/4032003"
  },
  {
    title: "Amsterdamned",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6a254f759ec3e8e2_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/amsterdamned/4557016"
  },
  {
    title: "The Lift",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/799455bbbbabb6c3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-lift/4557017"
  },
  {
    title: "Revenge",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2cef63838af05b94_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/revenge/3806716"
  },
  {
    title: "Beyond Outrage",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/101a30be3ac2a607_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/beyond-outrage/4545079"
  },
  {
    title: "Madman",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/68c91fe27c1b0355_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/madman/2336648"
  },
  {
    title: "13 Assassins",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ca7328a5332d48d9_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/have-a-nice-day/4536193"
  },
  {
    title: "Have A Nice Day",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/258922a9e5d21b42_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/have-a-nice-day/4536193"
  },
  {
    title: "The Quay Brothers Collected Short Stories Part I",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0b5e0660b889b298_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-quay-brothers-collected-short-films-part-1/4557006"
  },
  {
    title: "The Quay Brothers Collected Short Stories Part II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/1fd0abe09e16185f_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-quay-brothers-collected-short-films-part-2/4557007"
  },
  {
    title: "City of the Living Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a82798ecfe55fbb2_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/city-of-the-living-dead/2325581"
  },
  {
    title: "Ruin Me",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7dfe6d8d92cc6b23_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ruin-me/4155558"
  },
  {
    title: "Dogtooth",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/13b6b89317138ed3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dogtooth/3558694"
  },
  {
    title: "Victoria",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dcf4e905f95181a7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/victoria/4050174"
  },
  {
    title: "Wake Wood",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ff633218b3f42b08_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/wake-wood/2337599"
  },
  {
    title: "Southbound",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/24a6215cb0f478da_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/southbound/4393947"
  },
  {
    title: "Little Deaths",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8b55279cb67458c3_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/little-deaths/2539017"
  },
  {
    title: "Drug War",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7aa43d03ace47d54_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/drug-war/4123287"
  },
  {
    title: "All Cheerleaders Die",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bbefa0009fece3b9_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/all-cheerleaders-die/2898243"
  },
  {
    title: "Heathers",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/474abed5f7b4ee6a_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/heathers/4352887"
  },
  {
    title: "The Canal",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7cbde94999ffde15_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-canal/2458760"
  },
  {
    title: "November",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/62b29eca3ddd083d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/november/4329999"
  },
  {
    title: "The Chamber",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5c5a0d6358bf69b7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-chamber/4329997"
  },
  {
    title: "Caught",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5102da959d63253c_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/caught/4329998"
  },
  {
    title: "We Are Not Cats",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a0ec7887a4fce1b6_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/are-we-not-cats/4330004"
  },
  {
    title: "The Road Movie",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f0d8ef44544ad2c7_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-road-movie/4329996"
  },
  {
    title: "Threads",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e8833964b80f2725_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/threads/4045786"
  },
  {
    title: "Kill Your Friends",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4405fc7415ada617_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/kill-your-friends/4123286"
  },
  {
    title: "Kung Fu Killer",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/baef012b15dcd3be_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/kung-fu-killer/4123842"
  },
  {
    title: "Rainy Dog",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/15b55fa82c36e6ec_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/rainy-dog/4243154"
  },
  {
    title: "Ley Lines",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0d1202ef8fe21464_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/ley-lines/4243155"
  },
  {
    title: "A Christmas Horror Story",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0d2c9cf4d5b4ea00_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/a-christmas-horror-story/4244459"
  },
  {
    title: "The Mind's Eye",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6d8ab2a5351e6640_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-minds-eye/4244454"
  },
  {
    title: "Creepshow 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/56c5cc1d73ab8ca2_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/creepshow-2/4244457"
  },
  {
    title: "Battles Without Honour and Humanity",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b967f1aaad9c0634_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/battles-without-honor-and-humanity/4189570"
  },
  {
    title: "Battles Without Honour and Humanity: Hiroshima Death Match",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/24663f7dea64d8d6_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/battles-without-honor-and-humanity-hiroshima-death-match/4189571"
  },
  {
    title: "Battles Without Honour and Humanity: Final Episode",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a3b920746e9f5f58_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/battles-without-honor-and-humanity-final-episode/4189572"
  },
  {
    title: "Battles Without Honour and Humanity: Police Tactics",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/16b1c011cc9b778c_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/battles-without-honor-and-humanity-police-tactics/4189573"
  },
  {
    title: "Battles Without Honour and Humanity: Proxy War",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/05beed13b23cdb2c_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/battles-without-honor-and-humanity-proxy-war/4189574"
  },
  {
    title: "Dead or Alive",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bc7cb27ba8c039fb_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dead-or-alive/4159872"
  },
  {
    title: "Dead or Alive 2: Birds",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3da99ef3f39eda2d_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dead-or-alive-2-birds/4159873"
  },
  {
    title: "Dead or Alive: Final",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2f4b2b4a56ffffe4_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/dead-or-alive-final/4159874"
  },
  {
    title: "Female Prisoner 701: Scorpion",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5c2e805f3c0c4320_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/female-prisoner-701-scorpion/4193877"
  },
  {
    title: "Female Prisoner Scorpion Jailhouse 41",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7468273cbfba6c93_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/female-prisoner-scorpion-jailhouse-41/4193878"
  },
  {
    title: "Deep Red",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f19b83bf1cdb2469_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/deep-red/2325582"
  },
  {
    title: "Summer of 84",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7ba58eb7db6cfc56_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/summer-of-84/4432430"
  },
  {
    title: "The Witch in the Window",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b89a1a21166e21de_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-witch-in-the-window/4390004"
  },
  {
    title: "The Awakening",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c25512f9df171e40_boxart.jpg",
    url: "https://www.shudder.com/movies/watch/the-awakening/4432429"
  },
  {
    title: "The Old Dark House",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6980322275d84633_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-old-dark-house/4432432"
  },
  {
    title: "Terrified",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ba6a41248411e98e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/terrified/4436477"
  },
  {
    title: "Late Phases: Night of the Lone Wolf",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b2b28367fb2ea1a6_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/late-phases-night-of-the-lone-wolf/4392997"
  },
  {
    title: "A Girl Walks Home Alone At Night",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/65058316c3dfabef_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/a-girl-walks-home-alone-at-night/4393641"
  },
  {
    title: "Satan's Slaves",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/479faa3f814c30b4_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/satans-slaves/4109312"
  },
  {
    title: "Halloween",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ab2df38d42653606_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/halloween/4424133"
  },
  {
    title: "Halloween 4",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ceee8a0ef98aa94c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/halloween-4-the-return-of-michael-myers/4424136"
  },
  {
    title: "Halloween 5",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/373e434e3b5469a9_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/halloween-5-the-revenge-of-michael-myers/4424137"
  },
  {
    title: "Let Us Prey",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ab7ad7b09d2eccbc_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/let-us-prey/2325167"
  },
  {
    title: "Starry Eyes",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5f3732ccd5469c29_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/starry-eyes/4392999"
  },
  {
    title: "Black Coal, Thin Ice",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/09fe454045a162e9_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/black-coal-thin-ice/4123835"
  },
  {
    title: "Hell House LLC II: The Abadon Hotel",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f6b75d0f1e834fc6_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/hell-house-llc-ii-the-abaddon-hotel/4408401"
  },
  {
    title: "Let Her Out",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7ec64a52aa1d9431_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/let-her-out/4399021"
  },
  {
    title: "The Sublet",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bb1e0adb7e452f14_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-sublet/4399022"
  },
  {
    title: "The Night of the Virgin",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/498e62c272f35700_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-night-of-the-virgin/4399023"
  },
  {
    title: "Oldboy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/de7b3ac8eb882a4b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/oldboy/4391727"
  },
  {
    title: "Sympathy for Mr. Vengeance",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c382e1e2d2f7cb7f_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sympathy-for-mr-vengeance/4392992"
  },
  {
    title: "Lady Vengeance",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/996a666779851494_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/lady-vengeance/4392993"
  },
  {
    title: "Dan Curtis' Dracula",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9ce7ff2f739270f0_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dan-curtis-dracula/4392995"
  },
  {
    title: "Dead of Night",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/116e2893132a4887_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dead-of-night/4392996"
  },
  {
    title: "Open Windows",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/542d4f60f360e716_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/open-windows/2475853"
  },
  {
    title: "The Collector",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5c22a82919ca1df4_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-collector/2357523"
  },
  {
    title: "Wolfcop",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9edecd6c0817cbd2_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/wolfcop/4330001"
  },
  {
    title: "Female Prisoner Scorpion Beast Stable",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a2b7be45775eaa5b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/female-prisoner-scorpion-beast-stable/4193879"
  },
  {
    title: "Female Prisoner Scorpion 701's Grudge Song",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/58c5867902364997_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/female-prisoner-scorpion-701s-grudge-song/4193880"
  },
  {
    title: "The Quiet Earth",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/592756219ac95a13_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-quiet-earth/4155557"
  },
  {
    title: "Shinjuku Triad Society",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/16faa04b847b3da3_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/shinjuku-triad-society/4155561"
  },
  {
    title: "Mark of the Devil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5f38406c6aa58ccb_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/mark-of-the-devil/2526536"
  },
  {
    title: "Sequence Break",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0512dc0a8fd4ec60_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sequence-break/3973299"
  },
  {
    title: "Dark Water",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8b9884ef9a03bbe4_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dark-water/4155553"
  },
  {
    title: "Wolf Guy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f32a73d720813a6d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/wolfguy-enraged-lycanthrope/4155556"
  },
  {
    title: "Leviathan: The Story of Hellraiser and Hellbound Hellraiser Part 1",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8fdec6667297386b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/leviathan-the-story-of-hellraiser-part-1/4038356"
  },
  {
    title: "Re-Animator",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/605a27042d0acfb4_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/re-animator/2370384"
  },
  {
    title: "Demon Wind",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/eba2538e87f2b272_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/demon-wind/4032001"
  },
  {
    title: "Dude Bro Party Massacre 3",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ea770004746b3223_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dude-bro-party-massacre-3/4032002"
  },
  {
    title: "Still/Born",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0669335c4353c0b6_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/stillborn/3973921"
  },
  {
    title: "The Noonday Witch",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/282d684c52e1ac01_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-noonday-witch/3903888"
  },
  {
    title: "Hellbound Hellraiser II",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9c0697712982269e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/hellbound-hellraiser-ii/2228277"
  },
  {
    title: "Hellraiser",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a170b8e161053121_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/hellraiser/2325592"
  },
  {
    title: "Downrange",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d0945795e497c94b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/downrange/4029583"
  },
  {
    title: "The Texas Chainsaw Massacre",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/425866499d2b1164_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-texas-chain-saw-massacre/2476268"
  },
  {
    title: "Blood and Black Lace",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/79e12b1b809383d2_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/blood-and-black-lace/2526524"
  },
  {
    title: "Mon Mon Mon Monsters",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/dc0e53e8f5c2604e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/mon-mon-mon-monsters/3946179"
  },
  {
    title: "Behind the Mask: The Rise of Leslie Vernon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/30e8d0be7447b749_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/behind-the-mask-the-rise-of-leslie-vernon/2325602"
  },
  {
    title: "Dark Waters",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/13978200d1b50b98_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dark-waters/3973919"
  },
  {
    title: "Don't Hang Up",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/db6cc7d18dfd9c44_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dont-hang-up/3973915"
  },
  {
    title: "Body Bag Lover Boy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9b4571dca51517a3_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/bag-boy-lover-boy/3973918"
  },
  {
    title: "Cold Hell",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5c8d436fc513001e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/cold-hell/3973916"
  },
  {
    title: "Pod",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/55e4b690c7e5ca86_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/pod/3589186"
  },
  {
    title: "Rift",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6f89c999fe0b5566_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/rift/3999722"
  },
  {
    title: "Kiss of the Damned",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c6d14d77feb3fae1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/kiss-of-the-damned/2458747"
  },
  {
    title: "Last Ones Out",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/eaeefe71397aa045_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/last-ones-out/3946178"
  },
  {
    title: "Dead Body",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b2283a912087f0db_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dead-body/3954024"
  },
  {
    title: "Night of Something Strange",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/06f05d8c0321a642_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/night-of-something-strange/3954026"
  },
  {
    title: "Phenomena",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/56e717803e99d741_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/phenomena/3946177"
  },
  {
    title: "Tenebrae",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6b6827393456bc29_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/tenebrae/3947632"
  },
  {
    title: "Dead Shack",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/fddb60dbdd17153f_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dead-shack/3942739"
  },
  {
    title: "Honeymoon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c74c984413f891e2_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/honeymoon/3903890"
  },
  {
    title: "Mayhem",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f90dc4c9a4c15792_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/mayhem/3806707"
  },
  {
    title: "Demons",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2d9d8fec8fde9ffd_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/demons/2325168"
  },
  {
    title: "Demons 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/da9c48492b422456_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/demons-2/2228358"
  },
  {
    title: "Wasteland",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cc374dc53082bb82_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/wasteland/3236146"
  },
  {
    title: "The Unloved",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d68a0e09b1a8d25a_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-unloved/3236145"
  },
  {
    title: "Don't Grow Up",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0235dd5f965b6db8_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dont-grow-up/3806710"
  },
  {
    title: "It Stains the Sands Red",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bd40a9763d2d2fd8_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/it-stains-the-sands-red/3735850"
  },
  {
    title: "The World of Kanako",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3cacdf4122681fce_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-world-of-kanako/3133325"
  },
  {
    title: "Why Don't You Play In Hell?",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e24dfdaa68d85f5b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/why-dont-you-play-in-hell/3519300"
  },
  {
    title: "We Always Find Ourselves In The Sea",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/64500d35271a2ea0_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/we-always-find-ourselves-in-the-sea/3775566"
  },
  {
    title: "Exeter",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/1a8b4a69273fd96c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/exeter/3735786"
  },
  {
    title: "Better Watch Out",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cccaf56bcb5e30f1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/better-watch-out/3731871"
  },
  {
    title: "Killers",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0b1e993aec68a05c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/killers/3406069"
  },
  {
    title: "The Passion of Darkly Noon",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5a13ae99e6ecc45d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/passion-of-darkly-noon/3712753"
  },
  {
    title: "Unearthed and Untold: The Path to Pet Sematary",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b812c1b6630ec18a_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/unearthed-untold-the-path-to-pet-sematary/3708790"
  },
  {
    title: "Document of the Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/826bf87cb0201a06_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/document-of-the-dead/3712754"
  },
  {
    title: "Street Trash",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a2353591e2d6f4c5_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/street-trash/2527857"
  },
  {
    title: "Sam Was Here",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d69ef790c6d5952c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sam-was-here/3681417"
  },
  {
    title: "Another Evil",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b0ac5900a530cf9a_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/another-evil/3194895"
  },
  {
    title: "The Substitute",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2b864ac1e9e0e135_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-substitute/3701294"
  },
  {
    title: "Prom Night",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/310d5bb648209043_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/prom-night/3673389"
  },
  {
    title: "Prom Night 2: Hello Mary Lou",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4c06be9a7250eb6d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/prom-night-2-hello-mary-lou/3673390"
  },
  {
    title: "The Nightmare (Der Nachtmahr)",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bd186536c18437e3_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-nightmare-der-nachtmahr/3690964"
  },
  {
    title: "Best Worst Movie",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a4a0500e9e1a6b3b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/best-worst-movie/3498620"
  },
  {
    title: "Sennentuntschi",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9e51508c1dce1529_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sennentuntschi-curse-of-the-alps/3584045"
  },
  {
    title: "Spookers",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/bc7e2872b5c4be2f_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/spookers/3521441"
  },
  {
    title: "Can't Take It Back",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/df4d32173981bce8_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/cant-take-it-back/3589189"
  },
  {
    title: "Dark Valley",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3ecef14fbcfff0d0_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-dark-valley/3589188"
  },
  {
    title: "Lace Crater",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9375e1743a149d49_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/lace-crater/3584044"
  },
  {
    title: "The Corpse of Anna Fritz",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/8a9b647f7483b93b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-corpse-of-anna-fritz/3584047"
  },
  {
    title: "Chatroom",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/046ba9a8e283f830_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/chatroom/3572466"
  },
  {
    title: "Hell House LLC",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/06b231dbc70101a1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/hell-house-llc/3596928"
  },
  {
    title: "Found Footage 3D (2D Version)",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/430c8b6074b30e71_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/found-footage-3d-2d-version/3498612"
  },
  {
    title: "Suburban Gothic",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/08af28f5d538704b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/suburban-gothic/3572464"
  },
  {
    title: "Seoul Station",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e6f41bf194d70346_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/seoul-station/3254485"
  },
  {
    title: "Flowers in the Attic",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/be92a5cc11478bfd_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/flowers-in-the-attic/2327337"
  },
  {
    title: "Big Bad Wolves",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ace687384ddab57f_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/big-bad-wolves/2627723"
  },
  {
    title: "Small Town Killers",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e4bce41703e44f4d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/small-town-killers/3431012"
  },
  {
    title: "The Club",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a3c95dd2b99c12d6_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-club/3326897"
  },
  {
    title: "KUSO",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f66aa101b04e6ac4_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/kuso/3236144"
  },
  {
    title: "Alena",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/99dcabee576feabe_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/alena/3202446"
  },
  {
    title: "Among the Living",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a85599d342ed43be_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/among-the-living/3015367"
  },
  {
    title: "The Treatment",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/addbeaf104e0fa47_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-treatment/3214180"
  },
  {
    title: "Primal Screen",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cc1ef0db07d6601c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/primal-screen/3133326"
  },
  {
    title: "Noroi The Curse",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6886ca2eae6160c5_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/noroi-the-curse/3087140"
  },
  {
    title: "Lake Bodom",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4cc1126e0653ef59_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/lake-bodom/3037902"
  },
  {
    title: "Wake In Fright",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/58158487bd4a5f21_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/wake-in-fright/3063850"
  },
  {
    title: "Sweet, Sweet Lonely Girl",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7418f1f4ed37cc4e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sweet-sweet-lonely-girl/3061605"
  },
  {
    title: "Killer Ledgends",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e4f4dee40946e469_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/killer-legends/3032892"
  },
  {
    title: "Excess Flesh",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7151e213063230db_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/excess-flesh/3032891"
  },
  {
    title: "Hell Baby",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/b8dec0ef932b6de6_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/hell-baby/3032893"
  },
  {
    title: "Prevenge",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5fc42da6906fe1bb_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/prevenge/2989553"
  },
  {
    title: "Creepy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c40b7cc26e5e5fda_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/creepy/3015681"
  },
  {
    title: "The Hills Have Eyes 2",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4eb57ed68111f4ee_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-hills-have-eyes-2/2989557"
  },
  {
    title: "We Go On",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/835d49dcd1de5b8e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/we-go-on/2590360"
  },
  {
    title: "Never Sleep Again: The Elm Street Legacy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/2f51de82f9079715_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/never-sleep-again-the-elm-street-legacy/2933916"
  },
  {
    title: "Phantasm: Ravager",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e741623e497cf95d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/phantasm-ravager/2594505"
  },
  {
    title: "Blind Sun",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/ca673c22bd3e50ba_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/blind-sun/2898244"
  },
  {
    title: "Sadako VS Kayako",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/40a5122cbf8583f1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sadako-vs-kayako/2754306"
  },
  {
    title: "Dearest Sister",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f2cb15f8c5a7cdca_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/dearest-sister/2608527"
  },
  {
    title: "Crystal Lake Memories: The Complete History of Friday the 13th",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/57d32a78c3759ce7_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/crystal-lake-memories-the-complete-history-of-friday-the-13th/2714678"
  },
  {
    title: "God Told Me To",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7c7f73a390cfda5d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/god-told-me-to/2715170"
  },
  {
    title: "Rabid",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5e41a5da20a87012_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/rabid/2716504"
  },
  {
    title: "The Echo",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d00378c6481f322e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-echo/2714679"
  },
  {
    title: "Black Christmas",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/19bada6f82872bbb_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/black-christmas/2715157"
  },
  {
    title: "Shrew's Nest",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/3b2d326560483060_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/shrews-nest/2676801"
  },
  {
    title: "Inferno",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a0a6edc8f6cfa203_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/inferno/2714673"
  },
  {
    title: "31",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d418ca222626017c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/31/2682041"
  },
  {
    title: "The House That Dripped Blood",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/213e4f596a9d9704_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-house-that-dripped-blood/2663265"
  },
  {
    title: "Exorcist III",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/47a2e0a3abb53ba7_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/exorcist-iii/2631782"
  },
  {
    title: "Therapy",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/14b2a0ba5598bc18_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/therapy/2581914"
  },
  {
    title: "Phantasm III: Lord of the Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/fe511c5963dd70f9_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/phantasm-iii-lord-of-the-dead/2594506"
  },
  {
    title: "Phantasm (Remastered)",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7e1681d86f06a62e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/phantasm-remastered/2594504"
  },
  {
    title: "Phantasm IV: Oblivion",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/53420de2c51e0efd_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/phantasm-iv-oblivion/2594507"
  },
  {
    title: "The Stendhal Syndrome",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7e587e99cd6be35b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-stendhal-syndrome/2523670"
  },
  {
    title: "Nightmare AKA Blood Harvest",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9373749a42f4cedc_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/nightmare-aka-blood-harvest/2499243"
  },
  {
    title: "Contamination",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e8634c2749131eb3_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/contamination/2526516"
  },
  {
    title: "Digging Up The Marrow",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/65d3139df5ce2614_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/digging-up-the-marrow/2471697"
  },
  {
    title: "Henry: Portrait of a Serial Killer",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/7f4a78c1670f5f1e_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/henry-portrait-of-a-serial-killer/2327287"
  },
  {
    title: "Dead Kids",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4df9a0f68ca5d8f8_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/strange-behavior-aka-dead-kids/2445657"
  },
  {
    title: "Thirst",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9d2fe964ee226611_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/thirst/2443209"
  },
  {
    title: "Deathgasm",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/429eadf49ef17e8d_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/deathgasm/2357528"
  },
  {
    title: "1990: The Bronx Warriors",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/fb04322a1e61a354_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/1990-the-bronx-warriors/2336541"
  },
  {
    title: "The House by the Cemetery",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d71051a93708d032_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-house-by-the-cemetery/2337583"
  },
  {
    title: "Zombie",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/82e1a26088d5f53a_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/zombie/2337581"
  },
  {
    title: "We Are Still Here",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d9220a7548d801a1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/we-are-still-here/2337576"
  },
  {
    title: "Sorority Babes in the Slimeball Bowl-O-Rama",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d1dea5d8ab7a2c55_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/sorority-babes-in-the-slimeball-bowl-o-rama/2337570"
  },
  {
    title: "Stagefright",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/38cca873e1de5d0c_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/stagefright/2337579"
  },
  {
    title: "Society",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5cd3e07cf4009af2_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/society/2337582"
  },
  {
    title: "The Mutilator",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f19e2c763cf71e22_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-mutilator/2337589"
  },
  {
    title: "I Drink Your Blood",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/f67b8a475d7ff2c0_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/i-drink-your-blood/2228405"
  },
  {
    title: "Jack Frost",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/66220415c70a4847_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/jack-frost/2337552"
  },
  {
    title: "Tourist Trap",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/76cd0379f6d1d905_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/tourist-trap/2327290"
  },
  {
    title: "Day of the Animals",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0f82154af8f94fce_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/day-of-the-animals/2228402"
  },
  {
    title: "Angst",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/9f1331dd7c313d6b_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/angst/2325173"
  },
  {
    title: "Cannibal Ferox",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0039f3b6785bb1d0_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/cannibal-ferox/2325171"
  },
  {
    title: "Cannibal Holocaust",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6f9e4921aaf94378_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/cannibal-holocaust/2228375"
  },
  {
    title: "Pieces",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/5511e9620e05b216_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/pieces/2325170"
  },
  {
    title: "The Beyond",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/359926b985942272_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-beyond/2325608"
  },
  {
    title: "Willow Creek",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/a40312a2f16a9d77_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/willow-creek/2227891"
  },
  {
    title: "Blood Feast",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/6fa79a8b0628b318_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/blood-feast/2325596"
  },
  {
    title: "Last Will and Testament of Rosalind Leigh",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/cb722eb21a7057d1_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/last-will-and-testament-of-rosalind-leigh/2419090"
  },
  {
    title: "The Reef",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/d1bb92c20424eaa3_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/the-reef/2325590"
  },
  {
    title: "Stuck",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/4e9d2dd0af44204f_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/stuck/2228263"
  },
  {
    title: "Lovely Molly",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c446a5762690e223_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/lovely-molly/2228288"
  },
  {
    title: "Magic",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c2b5386c4bc95c44_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/magic/2327327"
  },
  {
    title: "Night of the Living Dead",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/c1313804a7d76d79_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/night-of-the-living-dead/2227837"
  },
  {
    title: "Citadel",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/e66220debd813a67_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/citadel/2227957"
  },
  {
    title: "Castle Freak",
    cover: "https://res.cloudinary.com/amc-svod/image/upload/f_auto,w_600,q_auto:best/vmh/0e08e9332a0aa006_boxart.jpg",
    url:"https://www.shudder.com/movies/watch/castle-freak/2325065"
  }   
]

export default MovieData;


