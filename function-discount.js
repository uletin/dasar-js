const voucher = (totalPrice) => {
  const maxPriceToGetDiscount = 30000;
  const maxDiscountPrice = 5000;

  //Diskon 10%, sama saja seperti 10/100
  const discountPercentage = 0.1;

  //Menghitung total discount 10% dari total belanja
  const totalDiscount = totalPrice * discountPercentage;

  if (totalPrice >= maxPriceToGetDiscount) {
    // Jika memenuhi syarat

    //Jika total discountnya lebih dari max discount, misal
    if (totalDiscount >= maxDiscountPrice) {
      // Menghitung total belanja setelah mendapatkan discount
      const totalPriceAfterDiscount = totalPrice - maxDiscountPrice;
      console.log(`Mendapatkan Diskon Total ${maxDiscountPrice}`);
      console.log(`Total Bayar`, totalPriceAfterDiscount);
    } else {
      const totalPriceAfterDiscount = totalPrice - totalDiscount;
      console.log(`Mendapatkan Diskon Total ${totalDiscount}`);
      console.log(`Total Bayar`, totalPriceAfterDiscount);
    }
  } else {
    // Jika tidak memenuhi syarat diskon
    console.log(`Tidak mendapatkan discount, total bayar ${totalPrice}`);
  }
};

voucher(28000);
