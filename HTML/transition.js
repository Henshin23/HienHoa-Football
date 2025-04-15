/*Nút điều hướng ảnh ở hàng 1*/
const slider = document.getElementById("slider");
const images = slider.querySelectorAll("img");
let index = 0;

function showImage(i) {
    images.forEach((img, idx) => {
        img.classList.toggle("active", idx === i);
    });
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % images.length;
    showImage(index);
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});

/*Hiệu ứng đổ bóng khi kéo thanh cuộn dọc trang web*/
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-content');
    header.classList.toggle('scrolled', window.scrollY > 0);
});
/*Mở tắt đăng nhập*/
function openLoginForm() {
    const modal = document.getElementById("loginModal");
    const modalContent = modal.querySelector(".modal-content");
    
    modal.classList.add("show");
    modal.style.display = "flex";

    setTimeout(() => {
        modalContent.classList.add("active");
    }, 10);
}

function closeLoginForm() {
    const modal = document.getElementById("loginModal");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    // Sau animation, set display none
    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300); // Khớp với transition time trong CSS
}
/*Mở đóng modal thông báo*/
function openAnnouncementModal() {
    const modal = document.getElementById("announcementModal");
    const modalContent = modal.querySelector(".modal-content");

    modal.classList.add("show");
    modal.style.display = "flex";
    setTimeout(() => {
        modalContent.classList.add("active");
    }, 10);
}

window.addEventListener("load", function () {
        //openAnnouncementModal();
    }); // Delay 1s cho trải nghiệm mượt hơn (có thể chỉnh)

function closeAnnouncementModal() {
    const modal = document.getElementById("announcementModal");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300);
}
/*đóng mở đăng ký*/
function openRegisterForm() {
    const loginModal = document.getElementById("loginModal");
    const loginContent = loginModal.querySelector(".modal-content");

    const registerModal = document.getElementById("registerModal");
    const registerContent = registerModal.querySelector(".modal-content");

    // Nếu form đăng nhập đang mở thì đóng trước
    if (loginModal.classList.contains("show")) {
        loginContent.classList.remove("active");
        loginModal.classList.remove("show");

        setTimeout(() => {
            loginModal.style.display = "none";

            // Sau khi đóng login, mở form đăng ký
            registerModal.classList.add("show");
            registerModal.style.display = "flex";
            setTimeout(() => {
                registerContent.classList.add("active");
            }, 10);
        }, 300); // Khớp với transition CSS
    } else {
        // Nếu login không mở thì chỉ mở register
        registerModal.classList.add("show");
        registerModal.style.display = "flex";
        setTimeout(() => {
            registerContent.classList.add("active");
        }, 10);
    }
}
function closeRegisterForm() {
    const modal = document.getElementById("registerModal");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300);
}
/*Đóng mở form quên mật khẩu*/
function openRecoverForm() {
    closeLoginForm();

    const modal = document.getElementById("recoverModal");
    const modalContent = modal.querySelector(".modal-content");

    modal.classList.add("show");
    modal.style.display = "flex";

    setTimeout(() => {
        modalContent.classList.add("active");
    }, 10);
}

function closeRecoverForm() {
    const modal = document.getElementById("recoverModal");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300);
}


function openRecoverForm1() {
    closeRecoverForm();

    const modal = document.getElementById("recoverModal1");
    const modalContent = modal.querySelector(".modal-content");

    modal.classList.add("show");
    modal.style.display = "flex";

    setTimeout(() => {
        modalContent.classList.add("active");
    }, 10);
}
function closeRecoverForm1() {
    const modal = document.getElementById("recoverModal1");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300);
}

function openRecoverForm2() {
    closeRecoverForm1();

    const modal = document.getElementById("recoverModal2");
    const modalContent = modal.querySelector(".modal-content");

    modal.classList.add("show");
    modal.style.display = "flex";

    setTimeout(() => {
        modalContent.classList.add("active");
    }, 10);
}
function closeRecoverForm2() {
    const modal = document.getElementById("recoverModal2");
    const modalContent = modal.querySelector(".modal-content");

    modalContent.classList.remove("active");
    modal.classList.remove("show");

    setTimeout(() => {
        if (!modal.classList.contains("show")) {
            modal.style.display = "none";
        }
    }, 300);
}
/*Mở bảng lịch sử*/
const historySection = document.querySelector('.booking-history');  // Lấy phần tử modal
const overlay = document.getElementById('overlay');  // Lấy overlay

function openHistory() {
    overlay.classList.add('show');  // Hiển thị overlay
    historySection.style.display = 'block';  // Đảm bảo modal được hiển thị
    setTimeout(() => {
        historySection.classList.add('show');  // Thêm class show để thực hiện hiệu ứng
    }, 10);
}

function closeHistory() {
    historySection.classList.remove('show');  // Loại bỏ hiệu ứng mở
    setTimeout(() => {
        historySection.style.display = 'none';  // Ẩn modal sau khi hiệu ứng hoàn tất
        overlay.classList.remove('show');  // Ẩn overlay
    }, 300); // Đảm bảo thời gian này trùng với thời gian của transition
}


//đóng tắt khi click ra ngoài
window.onclick = function(event) {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const recoverModal = document.getElementById("recoverModal");
    const recoverModal1 = document.getElementById("recoverModal1");
    const recoverModal2 = document.getElementById("recoverModal2");
    const modal = document.getElementById("announcementModal");
    const overlay = document.getElementById('overlay');
    if (event.target === modal) {
        closeAnnouncementModal();
    }
    if (event.target === loginModal) {
        closeLoginForm();
    }
    if (event.target === registerModal) {
        closeRegisterForm();
    }
    if (event.target === recoverModal) {
        closeRecoverForm();
    }
    if (event.target === recoverModal1) {
        closeRecoverForm1();
    }
    if (event.target === recoverModal2) {
        closeRecoverForm2();
    }
    if (event.target === overlay) {
        closeHistory();
    }

}

/*Nút quay lại*/
function switchToLogin() {
    closeRegisterForm();
    setTimeout(() => {
        openLoginForm(); 
    }, 300);

    closeRecoverForm();
    setTimeout(() => {
        openLoginForm(); 
    }, 300);
}

function switchToRecover() {
    closeRecoverForm1();
    setTimeout(() => {
        openRecoverForm();
    }, 300);
}

function switchToRecover1() {
    closeRecoverForm2();
    setTimeout(() => {
        openRecoverForm1();
    }, 300);
}

/*Đặt sân và xuất ra bảng lịch sử*/
document.querySelector('.booking-form form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngừng reload trang khi submit form

    // Lấy dữ liệu từ các trường trong form
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const subField = document.getElementById('sub-field').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const notes = document.getElementById('notes').value;

    // Tạo hàng mới cho bảng lịch sử
    const tableBody = document.querySelector('#historyTable tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${subField === "5" ? "Sân 5 người" : "Sân 7 người"}</td>
        <td>${paymentMethod === "1" ? "Chuyển khoản" : "Thanh toán trực tiếp"}</td>
        <td>${notes}</td>
    `;
    tableBody.appendChild(newRow);

    // Reset form sau khi submit thành công
    this.reset();
});


/*Nút đăng xuất*/
function toggleLogoutMenu() {
    const menu = document.getElementById("logoutMenu");
    menu.classList.toggle("hidden");
}

function logout() {
    window.location.href = "index.html";
}

/*Xử lý đánh giá sao*/
// Biến lưu trữ mức sao đã chọn
let selectedRating = 0;

// Lấy tất cả các sao trong phần đánh giá
const stars = document.querySelectorAll('.stars .fa-star');

// Gán sự kiện click cho từng sao
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));

        // Nếu nhấn lại vào sao đã chọn thì bỏ chọn
        if (selectedRating === rating) {
            selectedRating = 0;
        } else {
            selectedRating = rating;
        }

        updateStarRating();
    });
});

// Cập nhật màu sắc của các sao theo selectedRating
function updateStarRating() {
    stars.forEach(star => {
        const rating = parseInt(star.getAttribute('data-rating'));
        if (rating <= selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Xử lý gửi đánh giá
function submitReview() {
    const reviewText = document.getElementById('userReviewText').value;

    if (!selectedRating || !reviewText.trim()) {
        alert('Vui lòng chọn mức sao và viết đánh giá!');
        return;
    }

    // Tạo phần tử đánh giá mới
    const newReview = document.createElement('div');
    newReview.classList.add('review');

    // Gán nội dung HTML giống định dạng bạn đã dùng
    newReview.innerHTML = `
        <div class="review-header">
            <img src="https://i.pravatar.cc/50?img=50" class="avatar">
            <div class="user-info">
                <p class="user-name"><strong>Bạn</strong></p>
                <p class="user-rating">${'⭐'.repeat(selectedRating)}</p>
                <p class="user-comment">${reviewText}</p>
            </div>
        </div>
    `;

    // Thêm vào danh sách đánh giá
    const reviewContainer = document.getElementById('userReviews');
    reviewContainer.appendChild(newReview);

    // Reset form
    document.getElementById('userReviewText').value = '';
    selectedRating = 0;
    updateStarRating();
}













