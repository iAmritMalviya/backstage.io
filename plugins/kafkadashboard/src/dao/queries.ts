
export const getCount = (knex) => {
    try {
        return knex('gcp_catalog_data')
            .select('*');
    } catch (error) {
        console.log({ error });
    }
}

export const getRecordsByConditions = (knex, claimedStatus, limit, offset) => {
    const claimed = claimedStatus && claimedStatus === 'claimed';

    const query = knex('gcp_catalog_data');

    if (claimedStatus) {
        query.where('claimed', claimed);
    }
    if (limit) {
        query.limit(limit);
    }
    if (offset) {
        query.offset(offset);
    }

    return query;
}