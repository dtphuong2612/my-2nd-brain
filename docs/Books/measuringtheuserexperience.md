---
slug: Measuring The User Experience
title: Measuring The User Experience
authors: [dttph]
tags: [book,measuringtheuserexperience,datascience, dataanalyst, uiux]
---
# *Chapter 01: Introduction*
## 1.1 What is User Experience? 

Trải nghiệm người dùng bao gồm 3 đặc điểm xác định chính:

* Một người dùng có liên quan
* Người dùng đó đang tương tác với một sản phẩm, hệ thống hoặc bất cứ thứ gì đó với một giao diện

Phân biệt "*usability*" và "*user experience*"

* "*usability*" thường được coi là khả năng của người dùng sử dụng thứ gì đó để thực hiện một nhiệm vụ nào đó thành công
* "*user experience*" rộng hơn, nó nhìn toàn bộ tương tác của một cá nhân với thứ gì đó, cũng như những suy nghĩ, cảm xúc và nhận thức xuất phát từ tương tác đó

Trong môi trường kinh doanh nâng cao trải nghiệm người dùng thường hướng tới việc tăng doanh thu và giảm chi phí. Rất nhiều công ty đã mất tiền nhiều vì trải nghiệm người dùng kém của một sản phẩm mới.

## 1.2 What are user experience metrics?

Một metric là cách để đo lường hoặc đánh giá một hiện tượng đặc biệt hoặc một thứ gì đó.

Các số liệu UX tiết lộ điều gì đó về trải nghiệm người dùng, về trải nghiệm cá nhân của con người khi sử dụng sản phẩm hoặc hệ thống mộ số các khía cạnh như là hiệu quả, hiệu suất hay mức độ hài lòng.

Một số thứ không được coi là số liệu UX, chẳng hạn như sở thích và tháo độ chúng không liên quan đến trải nghiệm thực tế khi sử dụng thứ gì đó.

Số liệu UX có thể trả lời các câu hỏi quan trọng sau:

* Người dùng có giới thiệu sản phẩm không?
* Sản phẩm mới này có hiệu quả hơn khi sử dụng so với sản phẩm hiện tại không?
* Trải nghiệm của người dùng này so với đối thủ cạnh tranh
* Người dùng có cảm thấy hài lòng về sản phẩm sau khi sử dụng không?
* Vấn đề khả dụng quan trọng nhất đối với sản phẩm này là gì?
* Có cải tiến nào có thể thực hiện hay không ?

# *Chapter 02: Background*

## 2.1 Independent & Dependent Variables 

* Biến độc lập: là những biến có thể thao tác và kiểm soát. Ví dụ: tuổi, designs testing, ....
* Biến phụ thuộc: là những biến đo lường. Ví dụ: tỷ lệ thành công, số lỗi, mức độ hài lòng, ....

Khi thiết kế một nghiên cứu trải nghiệm người dùng nên có ý tưởng rõ ràng về những gì định thao tác (biến độc lập) và những gì định đo lường (biến phụ thuộc)

***Kết quả thú vị nhất sẽ là ở giao điểm của hai loại biến này***

## 2.2 Type of Data 

Có 4 loại data chính:

* Nominal: danh nghĩa 
* Ordinal: thứ tự
* Interval: khoảng
* Ratio: Tỷ lệ

### 2.2.1 Nominal Data

Nominal (hay còn là categorical) là các nhóm hay danh mục không có thử tự. Chúng ta chỉ có thể xem xét chúng khác nhau chứ không thể so sánh cái nào tốt hơn.

Trong UX, nominal data có thể là đặc điểm của các loại người dùng vị trí, nam hay nữ. Thường là những biến độc lập cho phép phân đoạn dữ liệu theo nhóm khác nhau. Nominal data cũng bao gồm một số biến phụ thuộc như là số lượng user click vào A thay vì B.

Trong số các số liệu thống kê mà bạn có thể sử dụng với nominal data có các số liệu thống kê mô tả đơn giản như tần suất và số đếm. Ví dụ có thể nói có 45% user là nữ , 200 user ở Mỹ.

### 2.2.2 Ordinal Data

Ordinal Data là các nhóm danh mục được sắp xếp. Ví dụ danh sách 100 bộ phim hay nhất. Chúng ta chỉ có thể nói bộ phim thứ 4 không bằng bộ phim thứ 2 chứ không thể nói bộ phim thứ 2 gấp đôi bộ phim thứ 4. Vì khoảng cách giữa các thứ hạng không có ý nghĩa.

Trong UX các ví dụ phổ biến nhất đến từ thứ tự dữ liệu từ báo cáo. Người dùng có thể đánh giá sản phẩm tốt, tuyệt vời hay kém. 

Cách phổ biến nhất để phân tích số liệu thứ tự là xem xét tần suất. Ví dụ có thể báo cáo 40% user đánh giá sản phẩm tốt, 20% là khá, ...

### 2.2.3 Interval Data

Interval Data là dữ liệu liên tục trong đó sự khác biệt giữa các giá trị có ý nghĩa. Ví dụ điểm số dao động từ 0 đến 100 với điểm càng cao khả năng sử dụng càng tốt hơn. 

1.  Poor......Fair......Good......Excellent
2. Poor .................................Excellent

Việc hán nhãn như thang điểm 1 sẽ làm thang điểm 1 trở thành dữ liệu thứ tự.

Việc bỏ nhãn can thiệp như thang điểm 2 và chỉ dán nhãn các điểm cuối làm dữ liệu giống khoảng hơn, đó là lý do tại sao hầu hết các thang đánh giá chủ quan chỉ dán nhãn các điểm cuối hoặc "mỏ neo" chứ không phải mọi điểm dữ liệu.

### 2.2.4 Ratio Data

Ratio data giống như dữ liệu interval data nhưng có thêm số không tuyêt đối. Điều này có nghĩa là giá trị 0 không phải là tùy ý, như dữ liệu khoảng, mà một số ý nghĩa vốn có.

Trong trải nghiệm người dùng, ví dụ rõ ràng nhất là về dữ liệu tỷ lệ là thời gian. Dữ liệu tỷ lệ cho phép bạn nói rằng cái gì đó nhanh hay chậm hơn, nhanh gấp đôi hoặc chậm bằng một nửa cái khác.

## 2.3 Descriptive Statistics

Thống kê mô tả rất cần thiết cho bất kỳ dữ liệu interval hay ratio nào. Thống kê mô tả, như tên gọi của nó, mô tả dữ liệu mà không nói bất cứ điều gì về quần thể lớn hơn. Thống kê suy luận cho phép đưa ra một số kết luận hoặc suy luận điều gì đó về một quần thể lớn hơn ngoài mẫu.

Các loại thống kê mô tả phổ biến nhất là các phép đo về xu hướng trung tâm (giá trị trung bình), các phép đo về độ biến thiên (độ lệch chuẩn) và các khoảng tin cậy, kết hợp cả hai.

### 2.3.1 Measure of Central Tendency

Các biện pháp về xu hướng trung tâm, chỉ đơn giản là một cách chọn một số duy nhất theo một cách nào đó đại diện cho một tập hợp các số. Ba biện pháp phổ biến nhất về trung tâm là trung bình, trung vị và mốt.

### 2.3.2 Measure of Variability

Các biện pháp về độ biến thiên phản ánh mức độ dữ liệu được phân bố hoặc phân tán trên phạm vi các giá trị. 

Trong hầu hết các nghiên cứu về khả năng sử dụng, đồ biến thiên là do sự khác biệt giữa những người tham gia. Các biện pháp cơ bản như là: phạm vi, phương sai và độ lệch chuẩn (range, variance, standard deviation)

* Variance: so sánh độ lệch giữa một điểm dữ liệu và giá trị trung bình của tập dữ liệu 
* Standard Deviation: Căn bậc hai của variance 

### 2.3.3 Confidence Intervals (Khoảng tin cậy)

Khoảng tin cậy là ước tính về phạm vi giá trị bao gồm giá trị quần thể thực đối với một thống kê, chẳng hạn như giá trị trung bình. Ví dụ: mức độ tin cậy là 95%, hoặc mức độ alpha là 5%, có nghĩa là bạn muốn chắc chắn 95% hoặc bạn sẵn sàng sai 5% thời gian.

$$ Z_ $$



