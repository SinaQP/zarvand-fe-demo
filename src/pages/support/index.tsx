import { FC, FormEvent, useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import { useLayoutContext } from '../../components/layout/layout.context';
import { createCitizenRequest } from '../../apis/support/create-citizen-request';
import { getCitizenRequests } from '../../apis/support/get-citizen-requests';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import Button from '../../components/button';
import { DemoCitizenRequest } from '../../demo/types';

const categories = [
   'پسماند',
   'روشنایی',
   'استعلام',
   'مجوزها',
   'گزارش مردمی ۱۳۷',
];

const statusFilters = ['همه', 'در حال بررسی', 'تایید شده', 'رد شده', 'تکمیل شده'];

const statusClassMap: Record<DemoCitizenRequest['status'], string> = {
   'در حال بررسی': 'statusReview',
   'تایید شده': 'statusApproved',
   'رد شده': 'statusRejected',
   'تکمیل شده': 'statusCompleted',
};

const Support: FC = () => {
   const { setHeaderId, setHeaderSubtitle } = useLayoutContext();
   const supportNumber = import.meta.env.VITE_APP_SUPPORT_NUMBER || 'نامشخص';

   const [requests, setRequests] = useState<DemoCitizenRequest[]>([]);
   const [statusFilter, setStatusFilter] = useState('همه');
   const [category, setCategory] = useState('پسماند');
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const loadRequests = async () => {
      const response = await getCitizenRequests();
      if (response.status === 200) {
         setRequests(response.body);
      }
   };

   useEffect(() => {
      setHeaderSubtitle('');
      setHeaderId && setHeaderId(styles['header']);
      loadRequests();
   }, [setHeaderId, setHeaderSubtitle]);

   const filteredRequests = useMemo(() => {
      if (statusFilter === 'همه') return requests;
      return requests.filter((request) => request.status === statusFilter);
   }, [requests, statusFilter]);

   const handleSubmit = async (event: FormEvent) => {
      event.preventDefault();

      if (!title.trim()) {
         toast.error('عنوان درخواست را وارد نمایید.');
         return;
      }

      if (description.trim().length < 10) {
         toast.error('توضیحات درخواست باید حداقل ۱۰ کاراکتر باشد.');
         return;
      }

      const response = await createCitizenRequest({
         category,
         title: title.trim(),
         description: description.trim(),
      });

      if (response.status === 201) {
         toast.success('درخواست شما با موفقیت ثبت شد.');
         setRequests((prevState) => [response.body, ...prevState]);
         setTitle('');
         setDescription('');
      } else {
         toast.error(response.body?.message || 'ثبت درخواست با خطا مواجه شد.');
      }
   };

   return (
      <div className={styles.supportStyleWrapper}>
         <div className={styles.infoCard}>
            <h3>ارتباط با پشتیبانی شهرداری کرمان</h3>
            <span>شماره تماس: {supportNumber}</span>
            <span>سامانه ۱۳۷: ثبت و پیگیری درخواست‌های شهروندی</span>
            <span>ساعات پاسخ‌گویی: ۸ تا ۱۶ روزهای کاری</span>
         </div>

         <form className={styles.requestFormCard} onSubmit={handleSubmit}>
            <h3>ثبت درخواست شهروندی</h3>

            <label>
               <span>دسته‌بندی</span>
               <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
               >
                  {categories.map((item) => (
                     <option key={item} value={item}>
                        {item}
                     </option>
                  ))}
               </select>
            </label>

            <label>
               <span>عنوان درخواست</span>
               <input
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  placeholder="مثال: درخواست جمع‌آوری پسماند حجیم در منطقه ۲"
               />
            </label>

            <label>
               <span>شرح درخواست</span>
               <textarea
                  rows={4}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  placeholder="جزئیات درخواست خود را با نشانی دقیق وارد کنید..."
               />
            </label>

            <Button className={styles.submitButton} type="submit" haveLoading>
               ثبت درخواست
            </Button>
         </form>

         <div className={styles.historyCard}>
            <div className={styles.historyHeader}>
               <h3>پیگیری درخواست‌ها</h3>
               <div className={styles.filters}>
                  {statusFilters.map((filter) => (
                     <button
                        type="button"
                        key={filter}
                        className={`${styles.filterButton} ${
                           statusFilter === filter ? styles.active : ''
                        }`}
                        onClick={() => setStatusFilter(filter)}
                     >
                        {filter}
                     </button>
                  ))}
               </div>
            </div>

            {filteredRequests.length === 0 ? (
               <div className={styles.emptyState}>
                  <h4>درخواستی در این وضعیت ثبت نشده است.</h4>
                  <p>
                     برای شروع، یک درخواست جدید از بخش بالای صفحه ثبت نمایید.
                  </p>
               </div>
            ) : (
               <div className={styles.requestList}>
                  {filteredRequests.map((request) => (
                     <div className={styles.requestItem} key={request.id}>
                        <div className={styles.requestMeta}>
                           <span className={styles.requestNo}>
                              شماره درخواست: {request.request_no}
                           </span>
                           <span>{request.created_at}</span>
                        </div>
                        <div className={styles.requestTitle}>{request.title}</div>
                        <div className={styles.requestDesc}>{request.description}</div>
                        <div className={styles.requestFooter}>
                           <span>{request.category}</span>
                           <span>{request.district}</span>
                           <span
                              className={`${styles.statusBadge} ${
                                 styles[statusClassMap[request.status]]
                              }`}
                           >
                              {request.status}
                           </span>
                        </div>
                     </div>
                  ))}
               </div>
            )}
         </div>

         <ToastContainer
            rtl
            position="bottom-center"
            autoClose={2500}
            hideProgressBar={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            bodyStyle={{ fontFamily: 'BNazanin', fontSize: '2.1rem' }}
            style={{ width: 'auto', maxWidth: '60rem' }}
         />
      </div>
   );
};

export default Support;
