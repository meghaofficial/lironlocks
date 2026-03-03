import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SubCategory {
  sub_category_name: string;
  products_list: string[];
}

interface Category {
  category_name: string;
  products_list?: string[];
  sub_category?: SubCategory[];
}

interface ProductState {
  value: Category[];
}

const initialState: ProductState = {
  value: [
    {
      category_name: "Mortise Locks",
      products_list: [
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554685/Picsart_26-03-03_11-36-01-738_jr5g7e.png',
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554680/Picsart_26-03-03_11-34-29-100_hy3txd.png',
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554675/Picsart_26-03-03_11-33-35-489_ntrdjx.png',
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554674/Picsart_26-03-03_11-35-01-681_urk5p5.png'
      ]
    },
    {
      category_name: "Handles",
      sub_category: [
        {
          sub_category_name: 'Iron Handles',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390393/Picsart_26-03-01_23-07-11-494_o4ainm.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390390/Picsart_26-03-01_22-59-37-109_wsugpx.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390390/Picsart_26-03-01_23-06-37-446_ejc92x.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390389/Picsart_26-03-01_23-05-55-927_plvxvx.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390389/Picsart_26-03-01_23-09-35-810_jnhily.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390389/Picsart_26-03-01_23-07-59-011_qg0tv0.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390388/Picsart_26-03-01_23-08-51-514_g0tf4w.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390387/Picsart_26-03-01_23-10-16-215_qwflk3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390386/Picsart_26-03-01_23-11-07-448_sfl6py.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390385/Picsart_26-03-01_23-18-31-857_rfihuw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390385/Picsart_26-03-01_23-19-21-600_gzgrgr.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390384/Picsart_26-03-01_23-20-35-195_xmax1n.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390384/Picsart_26-03-01_23-11-41-933_rfurhj.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390383/Picsart_26-03-01_23-22-54-127_gphtx3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390383/Picsart_26-03-01_23-22-26-944_pvxrzv.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390382/Picsart_26-03-01_23-20-01-405_dkzkzy.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390382/Picsart_26-03-01_23-21-07-076_ofur5h.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390381/Picsart_26-03-01_23-21-52-817_upl2dy.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390380/Picsart_26-03-01_23-25-19-004_apmj16.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390380/Picsart_26-03-01_23-23-27-651_mffsxl.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390379/Picsart_26-03-01_23-24-10-050_zlqhvw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390379/Picsart_26-03-01_23-25-48-163_zwmdlo.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390379/Picsart_26-03-01_23-26-24-739_oloi8h.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390377/Picsart_26-03-01_23-38-13-085_ibye8t.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390377/Picsart_26-03-01_23-27-20-101_eyqwr9.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390377/Picsart_26-03-01_23-29-54-543_nd1rcl.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390376/Picsart_26-03-01_23-28-11-823_b18zrk.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390375/Picsart_26-03-01_23-31-34-427_y30g6f.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390374/Picsart_26-03-01_23-29-17-546_d1ipks.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390373/Picsart_26-03-01_23-50-37-820_kb12yd.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390373/Picsart_26-03-01_23-30-35-905_d713tb.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390371/Picsart_26-03-01_23-32-13-531_kigpvp.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390371/Picsart_26-03-01_23-38-45-005_nltjcq.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390370/Picsart_26-03-01_23-34-54-326_dqbwia.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390368/Picsart_26-03-01_23-37-08-490_l6gjgb.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390368/Picsart_26-03-01_23-45-14-347_naqluh.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390368/Picsart_26-03-01_23-39-40-402_yhqypz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390367/Picsart_26-03-01_23-35-37-304_dkahjo.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390365/Picsart_26-03-01_23-40-49-368_mspxxl.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390365/Picsart_26-03-01_23-41-22-523_hhhfpd.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390364/Picsart_26-03-01_23-43-03-764_nup3d1.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390364/Picsart_26-03-01_23-42-22-643_ezek1g.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390363/Picsart_26-03-01_23-54-13-736_esyskt.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390362/Picsart_26-03-01_23-51-13-578_z6cvwx.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390362/Picsart_26-03-01_23-44-42-730_uyfun1.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390360/Picsart_26-03-01_23-55-54-149_f7zmyk.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390360/Picsart_26-03-01_23-52-54-431_nhtqkc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390359/Picsart_26-03-01_23-58-20-566_iumhzc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390359/Picsart_26-03-01_23-53-30-321_vd51nk.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390357/Picsart_26-03-01_23-55-21-987_euz40y.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390355/Picsart_26-03-01_23-59-21-896_kh3wrf.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390355/Picsart_26-03-01_23-57-42-705_ypyr5i.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390354/Picsart_26-03-01_23-57-06-334_hqekhc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772390354/Picsart_26-03-01_23-56-27-554_brnk7w.png'
          ]
        },
        {
          sub_category_name: 'Rose Handles',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428169/Picsart_26-03-02_10-32-37-914_lqq56d.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428149/Picsart_26-03-02_10-28-53-726_s5ltd6.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-02-963_cyqe8a.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-23-42-431_k0zw9w.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428146/Picsart_26-03-02_10-24-08-639_rvbufz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428144/Picsart_26-03-02_10-24-50-988_e90aul.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428144/Picsart_26-03-02_10-28-11-844_gdp05u.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428143/Picsart_26-03-02_10-30-00-785_m6suod.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428143/Picsart_26-03-02_10-29-30-703_byicz4.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428142/Picsart_26-03-02_10-26-15-240_lwdwjh.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428141/Picsart_26-03-02_10-31-08-076_c98ywz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428140/Picsart_26-03-02_10-31-53-505_tmqgbw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428140/Picsart_26-03-02_10-35-34-834_hvpsbg.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428140/Picsart_26-03-02_10-35-01-860_obxdeb.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428140/Picsart_26-03-02_10-34-22-965_c1jucv.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428139/Picsart_26-03-02_10-35-59-978_bj8eyl.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428138/Picsart_26-03-02_10-33-09-067_pu1po3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772428138/Picsart_26-03-02_10-36-22-451_ohiopt.png'
          ]
        },
        {
          sub_category_name: 'SS Handles',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303273/Picsart_26-02-28_23-45-30-428_lh1x1l.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303273/Picsart_26-02-28_23-47-11-320_g3r2ov.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303272/Picsart_26-02-28_23-44-49-151_zsugse.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303272/Picsart_26-02-28_23-51-27-611_zsmou5.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303272/Picsart_26-02-28_23-40-46-509_ykcsn8.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303271/Picsart_26-02-28_23-42-00-774_j5dmx3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303271/Picsart_26-02-28_23-43-33-258_te1ehq.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303269/Picsart_26-02-28_23-48-28-661_npvdkm.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303269/Picsart_26-02-28_23-47-49-213_yarmvz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303269/Picsart_26-02-28_23-46-34-650_ro9qc0.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303268/Picsart_26-02-28_23-49-49-998_lo5uxl.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303267/Picsart_26-02-28_23-49-16-947_hx7hxw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303265/Picsart_26-02-28_23-52-10-010_jyv0mn.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303265/Picsart_26-02-28_23-50-43-513_ghdjth.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303265/Picsart_26-02-28_23-52-56-501_bumcdg.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303264/Picsart_26-02-28_23-53-36-756_xlyo7g.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303264/Picsart_26-02-28_23-55-06-194_qkfb0z.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772303263/Picsart_26-02-28_23-54-25-543_uhout7.png'
          ]
        },
        {
          sub_category_name: 'Zinc Handle SS Plate',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-39-34-264_fwiwbz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262814/Picsart_26-02-27_23-38-23-989_igfj0h.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262809/Picsart_26-02-27_23-33-09-785_lldnas.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262808/Picsart_26-02-27_23-49-26-955_gm1ilw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262807/Picsart_26-02-27_23-29-15-732_q4ji5b.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262807/Picsart_26-02-27_23-24-28-254_t1twkp.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262807/Picsart_26-02-27_23-28-30-077_aalox4.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262806/Picsart_26-02-27_23-43-57-217_e3rhma.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262805/Picsart_26-02-27_23-45-02-989_cmyajr.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262804/Picsart_26-02-27_23-25-17-026_d51iia.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262801/Picsart_26-02-27_23-37-17-495_dv21ui.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262799/Picsart_26-02-27_23-27-30-741_hvownk.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262798/Picsart_26-02-27_23-50-01-638_fbn55f.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262798/Picsart_26-02-27_23-42-08-534_evwqsc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262797/Picsart_26-02-27_23-45-55-497_gv3d1i.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262796/Picsart_26-02-27_23-15-21-260_cfdmce.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262795/Picsart_26-02-27_23-14-28-933_ahpiam.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262794/Picsart_26-02-27_23-40-47-662_j04wfu.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262794/Picsart_26-02-27_23-40-47-662_j04wfu.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262793/Picsart_26-02-27_23-22-07-677_mxw7pa.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262790/Picsart_26-02-27_23-23-12-028_gbixiv.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262789/Picsart_26-02-27_23-06-08-560_mxypkg.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262788/Picsart_26-02-27_23-16-15-334_nihgdk.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262787/Picsart_26-02-27_23-12-29-699_pwqfh5.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262786/Picsart_26-02-27_23-13-32-763_xcr7do.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262786/Picsart_26-02-27_23-10-37-637_n7sjyn.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262785/Picsart_26-02-27_23-22-00-033_gqf0va.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262784/Picsart_26-02-27_23-17-15-439_nm2fm6.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262784/Picsart_26-02-27_23-07-34-112_o8lpm3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262783/Picsart_26-02-27_23-08-51-047_qirvsz.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262781/Picsart_26-02-27_23-26-11-768_bsebee.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262780/Picsart_26-02-27_23-19-48-222_sipku3.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262780/Picsart_26-02-27_23-18-24-872_in0ewc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262778/Picsart_26-02-27_23-00-25-528_pyebcd.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262778/Picsart_26-02-27_23-05-05-938_g8ljmu.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262776/Picsart_26-02-27_23-30-49-924_oeansh.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262775/Picsart_26-02-27_23-03-18-629_wbo0tc.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262775/Picsart_26-02-27_22-56-41-876_nznftn.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262775/Picsart_26-02-27_22-53-53-896_pvpadg.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262775/Picsart_26-02-27_22-55-45-023_pclcn8.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262772/Picsart_26-02-27_22-53-05-801_mm9kii.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262772/Picsart_26-02-27_23-01-37-740_w8rnps.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262772/Picsart_26-02-27_23-04-09-381_gfatsi.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262771/Picsart_26-02-27_23-09-48-933_rr3rlw.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262769/Picsart_26-02-27_22-59-07-720_x5sely.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262769/Picsart_26-02-27_23-47-43-850_qegovg.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772262768/Picsart_26-02-27_22-58-00-297_dalbqx.png'
          ]
        }
      ]
    },
    {
      category_name: "Cylinders",
      products_list: [
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554791/Picsart_26-03-03_11-38-00-887_lsfakl.png',
        'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772554726/Picsart_26-03-03_11-37-29-519_rbbeeq.png'
      ]
    },
    {
      category_name: "Dead Locks",
      sub_category: [
        {
          sub_category_name: 'Drawer Locks',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540844/Picsart_26-03-03_17-57-05-864_ll4084.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540842/Picsart_26-03-03_16-09-33-198_akyrjb.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540842/Picsart_26-03-03_11-42-09-077_azkhvf.png',
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540841/Picsart_26-03-03_11-39-20-386_o8kxcq.png'
          ]
        },
        {
          sub_category_name: 'Door Locks',
          products_list: [
            'https://res.cloudinary.com/dlmdsldqn/image/upload/v1772540840/Picsart_26-03-03_11-38-46-972_sf9cgp.png',
          ]
        }
      ]
    }
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;