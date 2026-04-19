-- 1. Reference Tables (Lookup Tables)
CREATE TABLE statuses (
    status_id SERIAL PRIMARY KEY,
    status TEXT NOT NULL
);

CREATE TABLE shippingtypes (
    shipping_type_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE packagetype (
    item_id SERIAL PRIMARY KEY,
    type VARCHAR(255) NOT NULL
);

-- 2. Detail Tables
CREATE TABLE transittimes (
    transit_id SERIAL PRIMARY KEY,
    shipping_type_id INTEGER REFERENCES shippingtypes(shipping_type_id),
    transitTimes TEXT,
    estimatedTime INTEGER
);

CREATE TABLE pets (
    pet_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    breed VARCHAR(255),
    age INTEGER,
    weight SMALLINT,
    petNumber SMALLINT
);

CREATE TABLE goods (
    goods_id SERIAL PRIMARY KEY,
    item_name TEXT,
    Item_number INTEGER,
    weight INTEGER,
    dimensions VARCHAR(255)
);

-- 3. Core Shipments Table
CREATE TABLE shipments (
    shipment_id SERIAL PRIMARY KEY,
    trackingNumber TEXT UNIQUE NOT NULL,
    shipping_type_id INTEGER REFERENCES shippingtypes(shipping_type_id),
    status_id INTEGER REFERENCES statuses(status_id),
    shipment_pet_id INTEGER REFERENCES pets(pet_id),
    shipment_good_id INTEGER REFERENCES goods(goods_id),
    transit_times_id INTEGER REFERENCES transittimes(transit_id),
    package_type INTEGER REFERENCES packagetype(item_id),
    
    -- Timestamps
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    depatureDate DATE,
    depatureTime TIME WITHOUT TIME ZONE,
    pickupDate DATE,
    pickupTime TIME WITHOUT TIME ZONE,
    expectedDeliveryDate DATE,
    
    -- Logistics & Cost
    totalFreight REAL,
    percentage INTEGER,
    shipper INTEGER, -- Likely a User ID reference
    receiver INTEGER, -- Likely a User ID reference
    
    -- Address Denormalization (For quick access)
    origin_street_address TEXT,
    origin_city TEXT,
    origin_state TEXT,
    origin_postal_code VARCHAR(255),
    origin_country TEXT,
    
    destination_street_address TEXT,
    destination_city TEXT,
    destination_state TEXT,
    destination_postal_code TEXT,
    destination_country TEXT,
    
    present_address TEXT,
    intermediate_path1 TEXT,
    intermediate_path2 TEXT
);

-- 4. Tracking & Logs
CREATE TABLE activity (
    id BIGSERIAL PRIMARY KEY,
    trackingNumber TEXT REFERENCES shipments(trackingNumber),
    status INTEGER REFERENCES statuses(status_id),
    time TIMESTAMP WITH TIME ZONE,
    present_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Financials
CREATE TABLE refunds (
    id BIGSERIAL PRIMARY KEY,
    user_id INTEGER,
    amount_paid BIGINT,
    refundable_amount BIGINT,
    purpose TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 1. Users Table (Core Information)
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone_number VARCHAR(50),
    address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Profiles Table (Roles & Auth Mapping)
-- Note: In Supabase, the 'id' usually matches the 'auth.uid()'
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(user_id), -- Links the Auth ID to your internal Serial ID
    role TEXT DEFAULT 'customer' CHECK (role IN ('admin', 'customer', 'driver', 'agent')),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Updating Shipments to Link to Real Users
-- We alter your existing shipments table to enforce the relationship
ALTER TABLE shipments 
    ADD CONSTRAINT fk_shipper FOREIGN KEY (shipper) REFERENCES users(user_id),
    ADD CONSTRAINT fk_receiver FOREIGN KEY (receiver) REFERENCES users(user_id);

-- 4. Updating Refunds to Link to Real Users
ALTER TABLE refunds 
    ADD CONSTRAINT fk_refund_user FOREIGN KEY (user_id) REFERENCES users(user_id);

-- 6. System Settings
CREATE TABLE system_settings (
    id SERIAL PRIMARY KEY,
    key VARCHAR(255) UNIQUE NOT NULL,
    value TEXT NOT NULL,
    description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO system_settings (key, value, description) VALUES ('currency_symbol', '$', 'Global currency symbol used in the application');